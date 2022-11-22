const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
require('dotenv').config()
const axios = require('axios')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content, status: 'pending' });

  commentsByPostId[req.params.id] = comments;

  axios.post('http://event-bus-srv:4005/events', {
    type: 'CommentCreated',
    data: {
      id: commentId,
      content,
      postId: req.params.id,
      status: 'pending'
    }
  })

  res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
  console.log("Event Received:", req.body.type);

  const { type, data } = req.body;

  // we are going to UPDATE the comment 
  // since we are receiving this from the moderation service
  // comment will either be 'rejected' or 'approved'
  if (type === "CommentModerated") {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];

    // This is the main reason for everything
    // Finding the comment to find it's updated status
    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;

    // Send CommentUpdated back to the 'Event Bus' 
    // the Event Bus will then send it to QUERY Service (4005 port) for update
    await axios.post("http://event-bus-srv:4005/events", {
      type: "CommentUpdated",
      data: {
        id,
        status,
        postId,
        content,
      },
    });
  }

  res.send({})
})


const PORT = process.env.PORT || 4001

console.log(process.env.PORT)

app.listen(PORT, () => {
  console.log(`COMMENTS Server listening on PORT ${PORT}`);
});
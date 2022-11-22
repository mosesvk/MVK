import express from 'express'
import {json} from 'body-parser'

const app = express();
app.use(json())

app.get("/api/users/current", (req, res) => {
    res.send("This Finally Workds!");
  });

app.listen(3000, () => {
    console.log(`Listening on Port - 3000!!!!! `)
})
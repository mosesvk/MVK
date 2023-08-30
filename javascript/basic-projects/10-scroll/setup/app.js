// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links


const navBtn = document.querySelector('.nav-toggle')
const linksDiv = document.querySelector('.links-container')

navBtn.addEventListener('click', () => {
    linksDiv.classList.toggle('show-links')
})
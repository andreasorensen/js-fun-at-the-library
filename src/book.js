function createTitle(title) {
  return `The ${title}`; 
};

createTitle();



function buildMainCharacter(name, age, pronouns) {
  return {
    name: name, 
    age: age, 
    pronouns: pronouns
  }
};

buildMainCharacter();


function saveReview(newReview, array) {
  if (!array.includes(newReview)) {
    return array.push(newReview)
  };
};

function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20
  return bookPageCount
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
  return book;
}

function editBook(bookTitle) {
  bookTitle.pageCount = (bookTitle.pageCount * 0.75)
};



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
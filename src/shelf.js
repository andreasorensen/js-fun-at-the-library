
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

function shelfBook(bookTitle, sciFiShelf) {
  if (sciFiShelf.length < 3) { 
  return sciFiShelf.unshift(bookTitle)
  }
};

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      return shelf.splice(i, 1);
    }
  }
};

function listTitles(shelf) {
  var shelfList = []
  for (var i=0; i < shelf.length; i++) {
    shelfList.push(shelf[i].title)
  }
  return `${shelfList[0]}, ${shelfList[1]}, ${shelfList[2]}`;
}
  
function searchShelf(shelf, bookTitle) {
  for (var i=0; i < shelf.length; i++){
    if ((shelf[i].title) === bookTitle) {
      return true 
    }
  }
  return false;
}
 // .includes() should be used when refactoring so that a boolean value is returned
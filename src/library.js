

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};

function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  } 
  return library
}

function addBook(library, book) {
  library.shelves[book.genre].push(book)
};

function checkoutBook(library, book, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    var bookTitle = library.shelves[genre][i].title;
  } if (bookTitle === book) {
    library.shelves[genre].splice(genre[i], 1)
    return `You have now checked out ${bookTitle} from the ${library.name}.`
  } else {
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}.`
  } 
};

function takeStock(library, genre) {
  if (genre === 'fantasy' || genre === 'fiction' || genre === 'nonFiction') {
    return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`
  } else {
    var bookSum = library.shelves.fantasy.length + library.shelves.nonFiction.length + library.shelves.fiction.length
    return `There are a total of ${bookSum} books at the ${library.name}.`
  }
};







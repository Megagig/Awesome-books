const form = document.querySelector('#form');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const listOfBooks = document.getElementById('books-list');
let listArray = JSON.parse(localStorage.getItem('listArray')) || [];

function addBook() {
  const newBook = {
    titleOfBook: bookTitle.value,
    authorOfBook: bookAuthor.value,
    bookId: Math.floor(Math.random() * 1000000),
  };
  listArray.push(newBook);
  localStorage.setItem('listArray', JSON.stringify(listArray));
  return true; // Return true to indicate book was added successfully
}

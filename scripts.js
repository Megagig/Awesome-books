const form = document.querySelector('#form');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const listOfBooks = document.getElementById('books-list');
let listArray = JSON.parse(localStorage.getItem('listArray')) || [];
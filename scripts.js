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

function removeBook(bookId) {
  listArray = listArray.filter((book) => book.bookId !== bookId);
  localStorage.setItem('listArray', JSON.stringify(listArray));
}

function showListOfBooks(book) {
  const tableRow = document.createElement('tr');
  const addedTitle = document.createElement('td');
  const addedAuthor = document.createElement('td');
  const removeButton = document.createElement('button');
  addedTitle.innerText = book.titleOfBook;
  addedAuthor.innerText = book.authorOfBook;
  removeButton.innerHTML = 'Remove';
  tableRow.append(addedTitle, addedAuthor, removeButton);
  listOfBooks.append(tableRow);
  removeButton.addEventListener('click', () => {
    tableRow.remove();
    removeBook(book.bookId);
  });
}

// Show existing books on page load
listArray.forEach((book) => showListOfBooks(book));

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (bookTitle.value === '' || bookAuthor.value === '') {
    // Instead of alert, show an error message on the page
    const errorMessage = document.createElement('p');
    errorMessage.innerText = 'Please fill in all fields';
    form.appendChild(errorMessage);
  } else {
    const addedSuccessfully = addBook();
    if (addedSuccessfully) {
      const newBook = listArray[listArray.length - 1];
      showListOfBooks(newBook);
      form.reset();
    }
  }
});
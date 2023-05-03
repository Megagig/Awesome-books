/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Storage {
  static getBooks() {
    let listArray;
    if (localStorage.getItem('listArray') === null) {
      listArray = [];
    } else {
      listArray = JSON.parse(localStorage.getItem('listArray'));
    }

    return listArray;
  }

  static addBook(book) {
    const listArray = Storage.getBooks();
    listArray.push(book);
    localStorage.setItem('listArray', JSON.stringify(listArray));
  }

  static removeBook(author) {
    const listArray = Storage.getBooks();

    listArray.forEach((book, index) => {
      if (book.author === author) {
        listArray.splice(index, 1);
      }
    });

    localStorage.setItem('listArray', JSON.stringify(listArray));
  }
}

class Display {
  static showBooks() {
    const listArray = Storage.getBooks();

    listArray.forEach((book) => Display.showListOfBooks(book));
  }

  static showListOfBooks(book) {
    const listOfBooks = document.getElementById('books-list');
    const tableRow = document.createElement('tr');
    const titleAndAuthor = document.createElement('td');
    const removeButton = document.createElement('td');
    const button = document.createElement('button');
    titleAndAuthor.innerHTML = ` <span>"${book.title}"</span> by <span>${book.author}</span> `;
    tableRow.append(titleAndAuthor);
    tableRow.append(removeButton);
    removeButton.append(button);
    button.classList.add('remove');
    button.innerText = 'Remove';
    listOfBooks.appendChild(tableRow);
  }

  static deleteBook(el) {
    if (el.classList.contains('remove')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', Display.showBooks);

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  Display.showListOfBooks(book);

  Storage.addBook(book);

  Display.clearFields();
});

document.querySelector('#books-list').addEventListener('click', (e) => {
  Display.deleteBook(e.target);

  Storage.removeBook(
    e.target.parentElement.previousElementSibling.lastElementChild.textContent
  );
});

// Header for list books page
const h1 = document.createElement('h1');
h1.textContent = 'All Awesome Books';
bookList.appendChild(h1);

this.books.forEach((book, index) => {
  const li = document.createElement('li');
  li.textContent = `${book.title} by ${book.author}`;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    this.removeBook(index);
    this.renderBookList();
  });
  li.appendChild(removeBtn);
  bookList.appendChild(li);
});
}

showSection = (sectionId) => {
// Hide all content sections
const contentSections = document.querySelectorAll('.content-section');
contentSections.forEach((section) => {
  section.classList.add('hidden');
});

// Show the selected content section
const selectedSection = document.getElementById(sectionId);
selectedSection.classList.remove('hidden');
};
}

const bookList = new BookList();
bookList.init();

function updateDateTime() {
const now = new Date();
const date = now.toLocaleDateString();
const time = now.toLocaleTimeString();
document.getElementById('datetime').innerHTML = `${date} ${time}`;
}

// Call updateDateTime function every second to update the time
setInterval(updateDateTime, 1000);

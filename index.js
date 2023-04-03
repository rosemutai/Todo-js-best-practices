import AllBooks from './modules/AllBooks.js';
import displayCurrentDate from './modules/Navbar.js';

const books = new AllBooks();

const form = document.getElementById('add-book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  books.formAddBook();
});

setInterval(() => {
  displayCurrentDate();
}, 1000);

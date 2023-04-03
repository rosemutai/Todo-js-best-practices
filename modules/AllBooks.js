import Book from './Book.js';

export default class AllBooks {
  constructor() {
    this.booksSection = document.getElementById('all-books');
    this.titleInput = document.getElementById('title-input');
    this.authorInput = document.getElementById('author-input');
    this.books = [];
    if (localStorage.getItem('localBooks')) {
      this.books = JSON.parse(localStorage.getItem('localBooks'));
      this.displayAllBooks();
    }
  }

  formAddBook() {
    const title = this.titleInput.value;
    const author = this.authorInput.value;
    const newBook = new Book(title, author);
    this.books.push(newBook);
    this.displayAllBooks();
    this.storeInLocalStorage();
    this.titleInput.value = '';
    this.authorInput.value = '';
  }

  storeInLocalStorage() {
    localStorage.setItem('localBooks', JSON.stringify(this.books));
  }

  displayAllBooks() {
    this.books.forEach((book, index) => {
      const div = document.createElement('div');
      div.className = 'book-details';
      const h3 = document.createElement('h3');
      h3.textContent = `${book.title} by ${book.author}`;
      const deleteButton = document.createElement('button');
      deleteButton.className = 'remove-btn';
      deleteButton.textContent = 'Remove';

      deleteButton.addEventListener('click', () => this.deleteBook(index));
      div.appendChild(h3);
      div.appendChild(deleteButton);
      this.booksSection.appendChild(div);
    });
  }

  deleteBook(index) {
    this.books.splice(index, 1);
    this.booksSection.innerHTML = '';
    this.displayAllBooks();
    this.storeInLocalStorage();
  }
}
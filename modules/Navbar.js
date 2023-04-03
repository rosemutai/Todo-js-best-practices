import { DateTime } from './luxon.js';

const formSection = document.getElementById('form-section');
const formLink = document.getElementById('form-link');
const homeLink = document.getElementById('home-link');
const contactLink = document.getElementById('contact-link');
const booksSection = document.getElementById('all-books');
const titleSection = document.getElementById('titleSection');
const contactSection = document.getElementById('contact-section');

formSection.style.display = 'none';
contactSection.style.display = 'none';

formLink.addEventListener('click', () => {
  formSection.style.display = 'flex';
  booksSection.style.display = 'none';
  titleSection.style.display = 'none';
  contactSection.style.display = 'none';
  formLink.classList.add('active');
  homeLink.classList.remove('active');
  contactLink.classList.remove('active');
});

homeLink.addEventListener('click', () => {
  formSection.style.display = 'none';
  booksSection.style.display = 'block';
  contactSection.style.display = 'none';
  titleSection.style.display = 'block';
  homeLink.classList.add('active');
  formLink.classList.remove('active');
  contactLink.classList.remove('active');
});

contactLink.addEventListener('click', () => {
  formSection.style.display = 'none';
  booksSection.style.display = 'none';
  titleSection.style.display = 'none';
  contactSection.style.display = 'block';
  contactLink.classList.add('active');
  homeLink.classList.remove('active');
  formLink.classList.remove('active');
});

const dateSection = document.getElementById('dateLine');
const displayCurrentDate = () => {
  const date = DateTime.now();
  const formattedDate = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  dateSection.innerHTML = formattedDate;
};

export default displayCurrentDate;
const joshuasBooks = [];

const newBookForm = document.querySelector("form");
const newBook = document.querySelector("#newBook");
const newButton = document.querySelector("#newButton");
const uploadButton = document.querySelector("#submitNewBook");
const cancel = document.querySelector("#cancel");

let title = newBookForm.elements.title;
let author = newBookForm.elements.author;
let year = newBookForm.elements.year;

cancel.addEventListener("click", hideForm);

newBook.addEventListener("click", showForm);

function hideForm() {
  newButton.classList.remove("hidden");
  newBookForm.classList.add("hidden");
};

function showForm() {
  newButton.classList.add("hidden");
  newBookForm.classList.remove("hidden");
};

function Book(title, author, year, status) {
  if (!new.target) {
    throw Error("You must use the 'new' operator");
  }
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
};

function addBook() {
};

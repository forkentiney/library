let joshuasBooks = [];

const newBookForm = document.querySelector("form");
const newBook = document.querySelector("#newBook");
const newButton = document.querySelector("#newButton");
const uploadButton = document.querySelector("#submitNewBook");
const cancel = document.querySelector("#cancel");


cancel.addEventListener("click", hideForm);
newBook.addEventListener("click", showForm);
uploadButton.addEventListener("click", addBook);

function hideForm() {
  newButton.classList.remove("hidden");
  newBookForm.classList.add("hidden");
};

function showForm() {
  newButton.classList.add("hidden");
  newBookForm.classList.remove("hidden");
};

function Book(title, author, year, status, id) {
  if (!new.target) {
    throw Error("You must use the 'new' operator");
  }
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
  this.id = id;
};

function addBook(event) {
  let title = newBookForm.elements.title.value;
  let author = newBookForm.elements.author.value;
  let year = newBookForm.elements.year.value;
  let status = "";
  let id = crypto.randomUUID();

  joshuasBooks.push(new Book(title, author, year, status, id));

  event.preventDefault();
  hideForm();
};

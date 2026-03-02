const newBookForm = document.querySelector("form");
const newButton = document.querySelector("#newButton");
const uploadButton = document.querySelector("#submitNewBook");
const cancel = document.querySelector("#cancel");
const shelf = document.querySelector("#shelf");
const info = document.querySelector("#info");

const totalityAndInfinity = new Book("Totality and Infinity", "Emmanual Levinas", 1961, "read", "1");
const beingAndTime = new Book("Being and Time", "Martin Heidegger", 1927, "read", "2");
const nineteenEightyFour = new Book("1984", "George Orwell", 1949, "unread", "3");
const allQuietOnTheWesternFront = new Book("All Quiet on the Western Front", "Erich Maria Remarque", 1928, "unread", "4");
const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", 1937, "read", "5");

let joshuasBooks = [totalityAndInfinity, beingAndTime, nineteenEightyFour, allQuietOnTheWesternFront, theHobbit];

cancel.addEventListener("click", hideForm);
newButton.addEventListener("click", showForm);
uploadButton.addEventListener("click", addBook);

function hideForm() {
  newBookForm.classList.add("hidden");
  event.preventDefault();
};

function showForm() {
  newBookForm.classList.remove("hidden");
};

function showInfo() {
  info.classList.toggle("hidden");
};

function findBooks() {
  const books = document.querySelectorAll(".book");
  books.forEach((book) => book.addEventListener("click", showInfo));
}

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

function clearShelf() {
  while (shelf.childElementCount > 1) {
    shelf.removeChild(shelf.firstChild);
  };
}

function putBooksOnShelf() {
  clearShelf();
  for (let i = 0; i < joshuasBooks.length; i++) {
    const book = document.createElement("div");
    book.setAttribute("class", "book");
    book.setAttribute("id", `${joshuasBooks[i].id}`)
    const title = document.createElement("h2");
    title.textContent = `${joshuasBooks[i].title}`;
    const author = document.createElement("h3");
    author.textContent = `${joshuasBooks[i].author}`;

    shelf.insertBefore(book, newButton);
    book.appendChild(title);
    book.appendChild(author);
  };
  findBooks();
};

function addBook(event) {
  let title = newBookForm.elements.title.value;
  let author = newBookForm.elements.author.value;
  let year = newBookForm.elements.year.value;
  let status = "";
  let id = crypto.randomUUID();

  joshuasBooks.push(new Book(title, author, year, status, id));
  putBooksOnShelf();

  event.preventDefault();
  hideForm();
};

putBooksOnShelf();
findBooks();

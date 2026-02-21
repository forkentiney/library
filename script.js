const newBookForm = document.querySelector("form");
const newButton = document.querySelector("#newButton");
const uploadButton = document.querySelector("#submitNewBook");
const cancel = document.querySelector("#cancel");
const shelf = document.querySelector("#shelf");

const totalityAndInfinity = new Book("Totality and Infinity", "Emmanual Levinas", 1961, "read", "1");
const beingAndTime = new Book("Being and Time", "Martin Heidegger", 1927, "read", "2");
const nineteenEightyFour = new Book("1984", "George Orwell", 1949, "unread", "3");
const allQuietOnTheWesternFront = new Book("All Quiet on the Western Front", "Erich Maria Remarque", 1928, "unread", "4");
const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", 1937, "read", "5");

let joshuasBooks = [totalityAndInfinity, beingAndTime, nineteenEightyFour, allQuietOnTheWesternFront, theHobbit];

cancel.addEventListener("click", hideForm);
newButton.addEventListener("click", showForm);
uploadButton.addEventListener("click", addBook);

function hideForm(event) {
  newBookForm.classList.add("hidden");
  event.preventDefault();
};

function showForm() {
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

function putBooksOnShelf() {
  while (shelf.childElementCount > 2) {
    shelf.removeChild(shelf.firstChild);
  };

  for (let i = 0; i < joshuasBooks.length; i++) {
    const book = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    book.setAttribute("class", "book");
    title.textContent = `${joshuasBooks[i].title}`;
    author.textContent = `${joshuasBooks[i].author}`;

    shelf.insertBefore(book, newButton);

    book.appendChild(title);
    book.appendChild(author);
  };
}

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

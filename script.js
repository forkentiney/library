const joshuasBooks = [];

function Book(title, author, year, status) {
  if (!new.target) {
    throw Error("You must use the 'new' operator");
  }
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
}

function addBook() {

}

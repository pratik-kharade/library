const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newbook = new Book(title, author, pages, read);
  myLibrary.push(newbook);
  render();
}

document.querySelector("#newbookform").addEventListener("submit", function () {
  event.preventDefault();
  addBookToLibrary();
});

function render() {
  let librarybook = document.querySelector("#library");
  librarybook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let ele = document.createElement("div");
    ele.innerHTML = `
    <div class='books'>
      <div class='card head>
       <h2 class ='title'><strong>${book.title}</strong></h2>
       <hr>
       <h5 class='author'>by ${book.author}</h5>
      </div>
      <div class ='card body'>
       <p>${book.pages} Pages</p>
       <p class='read-status'>${book.read ? "Read" : "Not Read Yet"}</p>
       <hr>
       <div class = 'buttons'>
       <button class='toggle-read' onclick='toggleRead(${i})'>Toggle Read</button> 
       <button class='rm-btn' onclick='remove(${i})'>Delete</button>
       </div>
      </div>
    </div> `;
    librarybook.appendChild(ele);
  }

  myLibrary.forEach((currElement) => {
    console.log(currElement);
  });
}

function remove(index) {
  myLibrary.splice(index, 1);
  render();
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

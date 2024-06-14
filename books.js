
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
};


let library = [];

function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    library.push(newBook);
    console.log(`${title} by ${author} added to  library.`);
}

function search(title) {
    let foundBooks = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    displayBooks(foundBooks);
}

function searchByAuthor(author) {
    let foundBooks = library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    displayBooks(foundBooks);
}

function displayBooks(books) {
    if (books.length === 0) {
        console.log('no book found');
    } else {
        console.log('mATCHING book');
        books.forEach(book => book.displayInfo());
    }
}


function bypages() {
    let filteredBooks = library.filter(book => book.pages <= 100);
    displayBooks(filteredBooks);
}

function formatshi() {
    let formattedBooks = library.map(book => {
        return new Book(`Title: ${book.title}`, `Author: ${book.author}`, book.pages);
    });
    displayBooks(formattedBooks);
}




addBook("diary of a wimpy kid", "jeff kinney", 150);
addBook("dowk rodrics rules", "jeff kinney", 150);
addBook("out of my mind", "sharon m", 150);
searchByAuthor("jeff kinney");
bypages();
formatshi();




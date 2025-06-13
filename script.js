// Book data with image URLs
const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: "$12.99",
        image: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
        genre: "Classic"
    },
    {
        title: "1984",
        author: "George Orwell",
        price: "$10.50",
        image: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
        genre: "Dystopian"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: "$11.75",
        image: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
        genre: "Classic"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: "$9.99",
        image: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
        genre: "Romance"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: "$14.25",
        image: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
        genre: "Fantasy"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: "$10.99",
        image: "https://m.media-amazon.com/images/I/91HPG31dTwL._AC_UF1000,1000_QL80_.jpg",
        genre: "Coming-of-age"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        price: "$15.50",
        image: "https://m.media-amazon.com/images/I/71-++hbbERL._AC_UF1000,1000_QL80_.jpg",
        genre: "Fantasy"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        price: "$18.99",
        image: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
        genre: "Fantasy"
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        price: "$8.99",
        image: "https://m.media-amazon.com/images/I/91LUbAcpACL._AC_UF1000,1000_QL80_.jpg",
        genre: "Political Satire"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        price: "$11.25",
        image: "https://m.media-amazon.com/images/I/81zE42gT3xL._AC_UF1000,1000_QL80_.jpg",
        genre: "Dystopian"
    }
];

// Display books when page loads
document.addEventListener('DOMContentLoaded', function () {
    displayBooks(books);
});

// Function to display books
function displayBooks(booksToDisplay) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    if (booksToDisplay.length === 0) {
        bookList.innerHTML = '<p class="no-results">No books found matching your search.</p>';
        return;
    }

    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        bookCard.innerHTML = `
            <div class="book-cover">
                <img src="${book.image}" alt="${book.title} cover">
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <p class="book-genre">${book.genre}</p>
                <p class="book-price">${book.price}</p>
            </div>
        `;

        bookList.appendChild(bookCard);
    });
}

// Search function
function searchBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );

    displayBooks(filteredBooks);
}
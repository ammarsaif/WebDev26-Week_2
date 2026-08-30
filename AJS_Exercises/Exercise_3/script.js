// Step 1: Object Destructuring
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Classic",
};

// TODO: Implement the displayBookInfo function
function displayBookInfo(book) {
  // TODO: Use object destructuring to extract title, author, and year
  const { title, author, year } = book;

  console.log(`Title: ${title}, Author: ${author}, Year: ${year}`);
}

// Step 2: Array Destructuring
const bookList = [
  /* TODO: Create multiple book objects */
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Art",
  },
  { title: "1984", author: "George Orwell", year: 1949, genre: "Fiction" },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Romance",
  },
];

// TODO: Implement the listBookTitles function
function listBookTitles(bookList) {
  const titles = [];
  for (const book of bookList) {
    // TODO: Use array destructuring to extract the title property
    const { title } = book;

    titles.push(title);
  }
  return titles;
}

// Step 3: Nested Object Destructuring
const bookWithPublisher = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  genre: "Fantasy",
  publisher: {
    name: "Scholastic",
    location: "New York",
  },
};

// TODO: Implement the displayPublisherLocation function
function displayPublisherLocation(book) {
  // TODO: Use nested object destructuring to extract the location property
  const { location } = book.publisher;

  console.log(`Publisher Location: ${location}`);
}

// Step 4: Default Values in Destructuring
const incompleteBook = {
  title: "Incomplete Book",
  // author and year properties are missing
};

// TODO: Implement the fillMissingInfo function
function fillMissingInfo(book) {
  // TODO: Use object destructuring with default values
  const { title, author = "Unknown Author", year = "Unknown Year" } = book;

  console.log(`Title: ${title}, Author: ${author}, Year: ${year}`);
}

// Step 5: Challenge (Optional)
// TODO: Implement the swapProperties function
function swapProperties(book) {
  // TODO: Use object destructuring to swap title and author

  const { title, author } = book;
  // Remember to create a new object to avoid modifying the original book object
  return { title: author, author: title };
}

// Test the functions
displayBookInfo(book);
console.log(listBookTitles(bookList));
displayPublisherLocation(bookWithPublisher);
fillMissingInfo(incompleteBook);
// TODO: Test the swapProperties function
console.log(swapProperties(book));

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         {/* <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p> */}


//       </div>
//       {/* <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// // export default App
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import BookDetails from "./BookDetails"; // Import the BookDetails component

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <div className="mb-6">
//           <a href="https://vitejs.dev" target="_blank">
//             <img src={viteLogo} className="logo" alt="Vite logo" />
//           </a>
//           <a href="https://react.dev" target="_blank">
//             <img src={reactLogo} className="logo react" alt="React logo" />
//           </a>
//         </div>

//         <h1>React + Vite</h1>
//         <div className="card">
//           <button onClick={() => setCount(count + 1)}>Count is {count}</button>
//         </div>

//         Using the BookDetails component
//         <BookDetails
//           author="J.K. Rowling"
//           title="Harry Potter and the Sorcerer's Stone"
//           isbn="978-0439708180"
//           price="19.99"
//         />
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BookDetails from "./BookDetails";

function App() {
  const [count, setCount] = useState(0);

  // Array of books with author, title, ISBN, price, and image
  const books = [
    {
      author: "J.K. Rowling",
      title: "Harry Potter and the Sorcerer's Stone",
      isbn: "978-0439708180",
      price: "19.99",
      image: `https://covers.openlibrary.org/b/id/8229471-L.jpg`,
    },
    {
      author: "George Orwell",
      title: "1984",
      isbn: "978-0451524935",
      price: "9.99",
      image: `https://covers.openlibrary.org/b/id/7222246-L.jpg`,
    },
    {
      author: "J.R.R. Tolkien",
      title: "The Hobbit",
      isbn: "978-0345339683",
      price: "14.99",
      image: `https://covers.openlibrary.org/b/id/7436356-L.jpg`,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="mb-6">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>React + Vite</h1>
        <div className="card-container">
          Loop through books and display each
          {books.map((book) => (
            <div key={book.isbn} className="book-card">
              <img src={book.image} alt={book.title} />
              <div className="book-info">
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>ISBN: {book.isbn}</p>
                <p className="price">Price: ${book.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

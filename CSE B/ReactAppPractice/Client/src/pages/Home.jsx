import React from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="text-primary fw-bold">Home Page</h1>
        <p className="text-muted">Welcome to our application. Explore our latest products!</p>
      </div>
      <div className="row">
        {["A Brief History of Time", "The Origin of Species", "The Feynman Lectures on Physics", "Cosmos"].map((book, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow-sm border-0 rounded">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt={book} />
              <div className="card-body text-center">
                <h5 className="card-title">{book}</h5>
                <p className="card-text text-muted">A remarkable book by a renowned scientist.</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

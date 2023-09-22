import React, { useState } from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
export default function App() {
  const [books, setBooks] = useState([]); // State to manage book data
  const [newBook, setNewBook] = useState({
    name: "",
    author: "",
    publication: "",
    price: ""
  });
  const submitHandler = () => {
    // Ensure all fields are filled before adding a new book
    if (
      newBook.name &&
      newBook.author &&
      newBook.publication &&
      newBook.price
    ) {
      setBooks([...books, newBook]); // Add the new book to the list of books
      setNewBook({ name: "", author: "", publication: "", price: "" }); // Clear the input fields
    }
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <div style={{marginalign:"center"}}></div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", marginLeft: "10px" }}>
            <div>Name of the book</div>
            <div style={{ marginLeft: "40px" }}>
              <input
                type="text"
                value={newBook.name} 
                onChange={(e) =>
                  setNewBook({ ...newBook, name: e.target.value })
                }
              required />
            </div>
          </div>
          <div style={{ display: "flex", marginLeft: "10px" }} >
            <div>Author</div>
            <div style={{ marginLeft: "40px" }}>
              <input
                type="text" required
                value={newBook.author}
                onChange={(e) =>
                  setNewBook({ ...newBook, author: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div style={{ display: "flex", marginLeft: "10px" }}>
            <div>Publication</div>
            <div style={{ marginLeft: "60px" }}>
              <input
                type="text"
                value={newBook.publication}
                onChange={(e) =>
                  setNewBook({ ...newBook, publication: e.target.value })
                }
              required/>
            </div>
          </div>
          <div style={{ display: "flex", marginLeft: "20px" }}>
            <div>Price</div>
            <div style={{ marginLeft: "40px" }}>
              <input
                type="text"
                value={newBook.price}
                onChange={(e) =>
                  setNewBook({ ...newBook, price: e.target.value })
                }
               required/>
            </div>
          </div>
        </div>
        <button onClick={submitHandler}>Add a book</button>
      </div>
      <Container>
        <Row>
          <Col>
            <Table bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Publication</th>
                  <th>Price</th>
                  </tr>
                  
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={index}>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.publication}</td>
                    <td>{book.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
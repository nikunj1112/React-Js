import { useState } from "react";
import "./Book.css";

export default function Books() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [index, setIndex] = useState(0);

    // define state
    const [books, setBooks] = useState([
        {
            "id": 1,
            "title": "The Silent Forest",
            "author": "Michael Green"
        },
        {
            "id": 2,
            "title": "Dreams of Tomorrow",
            "author": "Sophia Carter"
        },
        {
            "id": 3,
            "title": "Winds of Change",
            "author": "Daniel Harris"
        }
    ]);

    const addBook = () => {
        const newBook = {
            title: title,
            author: author,
        };
        setBooks([...books, newBook]);
    };

    function removeBook(index) {
        const temp = [...books];
        temp.splice(index, 1);
        setBooks(temp);
    }

    function updateBook(i) {
        setIndex(i);
        setTitle(books[index].title);
        setAuthor(books[index].author);
    }

    return (
        <div className="book-container theme-gradient">
            <h2>📚🪺 BookNest </h2>
            <div className="form">
                <input
                    type="text"
                    placeholder="Book Name.."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author Name.."
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button onClick={addBook}>Add Book</button>
                <button
                    onClick={() => {
                        const temp = [...books];
                        temp[index].title = title;
                        temp[index].author = author;
                        setBooks(temp);
                    }}
                >
                    Update Book
                </button>
            </div>


            <div className="book-list">

            {books.map((book, i) => (
                <div key={i} className="book-card" >
                    <p>
                       <div>{book.title} - {book.author}  </div> 
                       <div>
                        <button className="add-btn" onClick={() => removeBook(i)}> ❌ </button>
                        <button className="update-btn" onClick={() => updateBook(i)}> ✏️ </button>
                        </div>
                    </p>
                </div>
            
            ))}
            </div>
        </div>
        
    );
}




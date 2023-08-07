import React from 'react';
import './App.css';
import {useState} from "react";
import {useEffect} from "react";
// import axios from "axios";
import BookModel from "./models/BookModel";
import {MainPage} from "./views/MainPage/MainPage";

function App() {
    // state to save bookList
    const [bookList, setBookList] = useState<BookModel[]>([]);

    // fetch books list and set corresponding State
    const fetchBooks = async () => {
        const response = await fetch("http://localhost:9002/api/books");
        if(!response.ok){
            throw new Error("failed to fetch data");
        }
        const apiBookListJson = await response.json();

/*        const response = await axios.get("http://localhost:9002/api/books");
        const apiBookListJson = response.data;*/


        const apiBookList: BookModel[] = [];

        for (const apiBookListElement of apiBookListJson) {
            apiBookList.push(
                {
                    "bookId": apiBookListElement.bookId,
                    "bookName": apiBookListElement.bookName,
                    "bookDescription": apiBookListElement.bookDescription,
                    "bookImage": apiBookListElement.bookImage,
                    "bookCategory": apiBookListElement.bookCategory,
                    "bookAuthor": apiBookListElement.bookAuthor,
                    "copies_available": apiBookListElement.copies_available,
                    "copies_in_tock": apiBookListElement.copies_available
                }
            );

        }
        setBookList(apiBookList);
    }

    // when loading App component, fecth books list from database
    useEffect(
        () => {
            fetchBooks();
        },
        []
    );



  return (
    <div className="App">
        <div>
            <MainPage books={bookList}  />
        </div>
    </div>
  );
}

export default App;

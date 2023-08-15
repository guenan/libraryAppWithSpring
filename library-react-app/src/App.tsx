import React from 'react';
import './App.css';
import {useState} from "react";
import {useEffect} from "react";
// import axios from "axios";
import BookModel from "./models/BookModel";
import {MainPage} from "./views/MainPage/MainPage";

import {getBookModelListFromJsonBookList} from "./utilities/JsonModelExtracter";
import SearchPage from "./views/SearchPage/SearchPage";


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

        const apiBookList: BookModel[] = getBookModelListFromJsonBookList(apiBookListJson);

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
            {/*<MainPage books={bookList}  />*/}
            <SearchPage searchValue=""  />
        </div>
    </div>
  );
}

export default App;

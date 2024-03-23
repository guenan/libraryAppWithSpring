import React from 'react';
import './App.css';
import {useState} from "react";
import {useEffect} from "react";
// import axios from "axios";
import BookModel from "./models/BookModel";
import {MainPage} from "./views/MainPage/MainPage";

import {getBookModelListFromJsonBookList} from "./utilities/JsonModelExtracter";
import SearchPage from "./views/SearchPage/SearchPage";
import BookDetail from "./views/BookDetailPage/components/BookDetail";
import BookDetailPage from "./views/BookDetailPage/BookDetailPage";


function App() {
    // state to save bookList
    const [bookList, setBookList] = useState<BookModel[]>([]);

    // fetch books list and set corresponding State
    const fetchBooks = async () => {
        const response = await fetch("http://localhost:9002/api/books");
        /*        const response = await axios.get("http://localhost:9002/api/books");
        const apiBookListJson = response.data;*/
        if(!response.ok){
            throw new Error("failed to fetch data");
        }else{
            const apiBookListJson = await response.json();
            const apiBookList: BookModel[] = getBookModelListFromJsonBookList(apiBookListJson);
            setBookList(apiBookList);


        }

    }

    // when loading App component, fecth books list from database
    useEffect(
        () => {
            fetchBooks();
            // console.log(bookList[0]);
        },
        []
    );

    const myBook: BookModel = new BookModel();
    myBook.bookId = 1;
    myBook.bookAuthor = "F. Scott Fitzgerald";
    myBook.bookName = "The Great Gatsby";
    myBook.bookImage = "image1.png";
    myBook.copies_in_stock = 5;
    myBook.copies_available = 10;
    myBook.bookDescription = "A classic novel by F. Scott Fitzgerald\r\nSQL est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles. Outre le langage de manipulation des données.\r\nSQL est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles. Outre le langage de manipulation des données .\r\nSQL est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles. Outre le langage de manipulation des données \r\n";




  return (
    <div className="App">
        <div>
            <MainPage books={bookList}  />
            <SearchPage searchValue=""  />
            <BookDetailPage book={bookList[0]} />
        </div>
    </div>
  );
}

export default App;

import React, {FC} from "react";
import BookModel from "../../models/BookModel";
import {ShowAllBooks} from "./components/ShowAllBooks";
import {Header} from "./components/Header";

interface MainPageProps{
    books: BookModel[];
}
export const MainPage: FC<MainPageProps> = (props) => {

    return (
        <div>
            <Header />
            <ShowAllBooks books={props.books} />
        </div>
    );
}

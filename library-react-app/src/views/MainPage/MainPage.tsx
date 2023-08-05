import React, {FC} from "react";
import BookModel from "../../models/BookModel";
import {ShowAllBooks} from "./components/ShowAllBooks";

interface MainPageProps{
    books: BookModel[];
}
export const MainPage: FC<MainPageProps> = (props) => {

    return (
        <div>
            <ShowAllBooks books={props.books} />
        </div>
    );
}

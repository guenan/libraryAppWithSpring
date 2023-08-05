import React, {FC} from "react";
import BookModel from "../../../models/BookModel";
import {Carousel} from "./Carousel";

interface ShowAllBooksProps{
    books: BookModel[];
}
export const ShowAllBooks: FC<ShowAllBooksProps> = (props) => {


    return (
        <div>
            <Carousel bookList={props.books} />
        </div>
    );
}
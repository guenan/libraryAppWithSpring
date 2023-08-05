import React, {FC} from "react";
import BookModel from "../../../models/BookModel";

interface ShowABookProps{
    book: BookModel;
}

export const ShowABook: FC<ShowABookProps> = (props) => {
    return (
        <div className="flex flex-col items-center m-5">
            <img className="mx-auto"  src={"/images/"+props.book.bookImage} width='150' height='150' alt={props.book.bookName}/>
            <h4>{props.book.bookName}</h4>
            <h3>{props.book.bookAuthor}</h3>
            <button className="bg-blue-500 rounded text-white px-4 py-2">Reserve</button>
        </div>
    );
}
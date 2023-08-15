import React, {FC} from "react";
import BookModel from "../../../models/BookModel";

interface SearchBookDetailProps{
    book: BookModel;
}

const SearchBookDetail: FC<SearchBookDetailProps> = (props) => {

    return (
        <div className={"flex justify-center mt-2"}>
            <div className={"flex rounded w-5/6 border-2 space-x-12 justify-between p-4"}>
                <div className={"flex items-center ml-4"}>
                    <img src={"/images/" + props.book.bookImage} width='200px' height='200px' alt={props.book.bookName} />
                </div>
                <div className={"flex flex-col text-justify w-1/2"}>
                    <p className={"mt-8"}>{props.book.bookAuthor}</p>
                    <p className={"my-2"}>{props.book.bookName}</p>
                    <p className={"my-2 text-justify"}>{props.book.bookDescription}</p>
                </div>
                <div className={"flex items-center"}>
                    <button className={"rounded bg-blue-500 text-white px-2 py-2 w-40"}> View Details </button>
                </div>
            </div>
        </div>
    );
}
export default SearchBookDetail;
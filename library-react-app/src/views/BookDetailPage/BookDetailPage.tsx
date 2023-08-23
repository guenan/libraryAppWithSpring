import React, {useState, FC} from "react";
import BookModel from "../../models/BookModel";
import BookDetail from "./components/BookDetail";
import ShowAllBookReviewMessage from "./components/ShowAllBookReviewMessage";

interface BookDetailPageProps{
    book: BookModel;
}

const BookDetailPage: FC<BookDetailPageProps> = (props) => {

    return (
        <div>
            <BookDetail book={props.book} />
            <ShowAllBookReviewMessage bookReviewList={props.book.bookReviews} />
        </div>
    );
}

export default BookDetailPage;
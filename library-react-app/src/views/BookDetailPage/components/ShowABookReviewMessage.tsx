import React, {useState, FC} from "react";
import BookModel from "../../../models/BookModel";
import BookReviewModel from "../../../models/BookReviewModel";
import BookRating from "./BookRating";

interface ShowABookReviewMessageProps{
    bookReview: BookReviewModel;
}

const ShowABookReviewMessage: FC<ShowABookReviewMessageProps> = (props) => {

    return (
        <div className={"flex py-4 border-b-4"}>
            <div className={"flex flex-col mr-10"}>
                <p>{props.bookReview.user?.userEmail}</p>
                <p>{props.bookReview.bookReviewDate}</p>
                <p>{props.bookReview.bookReviewDescription}</p>
            </div>
            <BookRating rate={props.bookReview.bookReviewScore} maxRateSize={5} />
        </div>
    );
}

export default ShowABookReviewMessage;
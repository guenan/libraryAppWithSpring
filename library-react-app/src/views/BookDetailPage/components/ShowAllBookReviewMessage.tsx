import React, {useState, FC} from "react";
import BookModel from "../../../models/BookModel";
import ShowABookReviewMessage from "./ShowABookReviewMessage";
import BookReviewModel from "../../../models/BookReviewModel";

interface ShowAllBookReviewMessageProps{
    bookReviewList: BookReviewModel[] | null;
}

const ShowAllBookReviewMessage: FC<ShowAllBookReviewMessageProps> = (props) => {

    let renderedBookReviewMessage;
    if(props.bookReviewList !== null) {
        renderedBookReviewMessage = props.bookReviewList.map( (bookReview) => {
                return <ShowABookReviewMessage bookReview={bookReview} key={bookReview.user?.userEmail} />
            }
        );
    }


    return (
        <div className={"flex"}>
            <div>
                Latest Reviews:
            </div>
            <div>
                {renderedBookReviewMessage}
            </div>
        </div>
    );
}

export default ShowAllBookReviewMessage;
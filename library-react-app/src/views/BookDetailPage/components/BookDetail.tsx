import React, {useState, FC} from "react";
import BookModel from "../../../models/BookModel";
import BookRating from "./BookRating";

interface BookDetailProps{
    book: BookModel;
}

const BookDetail: FC<BookDetailProps> = (props) => {

    const averageRating = () => {
        if(props.book.bookReviews !== null){
            let sumRateValue: number = 0;
            for ( const bookReview of props.book.bookReviews) {
                    sumRateValue += bookReview.bookReviewScore;
            }
            return sumRateValue/props.book.bookReviews.length;
        }
        return 0;
    }

    return (
        <div className={"flex justify-evenly mt-[60px] py-4 border-b-4"}>
            <div>
                <img src={"/images/"+props.book.bookImage} width={"300"} height={"300"} alt={props.book.bookName}/>
            </div>
            <div className={"flex flex-col w-96"}>
                <h3>{props.book.bookName}</h3>
                <h6>{props.book.bookAuthor}</h6>
                <div>{props.book.bookDescription}</div>
                <BookRating rate={averageRating()} maxRateSize={5} />
            </div>
            <div className={"flex flex-col content-evenly border-2"}>
                <div className={"py-4 border-b-4"}>0/5 books checked out</div>
                <div className={"py-4 border-b-4"}>
                    <h3>Available</h3>
                    <p>10 copies 9 available</p>
                    <div><button className={"border-2 w-24 h-8 px-1"}>Sign in</button></div>
                </div>

                <div className={"py-4 border-b-4"}>This number can change until placing order has been complete.</div>
                <div className={"py-4 border-b-4"}>Sign in to be able to leave a review</div>

            </div>
        </div>
    );
}

export default BookDetail;
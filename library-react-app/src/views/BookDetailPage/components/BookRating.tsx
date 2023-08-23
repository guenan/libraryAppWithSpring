import React, {useState, FC} from "react";
import BookModel from "../../../models/BookModel";
import { FaRegStar, FaStar, FaStarHalfStroke  } from "react-icons/fa6";

interface BookRatingProps{
    rate: number;
    maxRateSize: number;
}



const BookRating: FC<BookRatingProps> = (props) => {

    let rate: number = props.rate;
    let maxSize: number = props.maxRateSize;

    let fullStars = 0;

    let halfStars = 0;

    let emptyStars = 0;

    if(rate !== undefined && maxSize !== undefined && rate > 0 && rate < maxSize){
        fullStars = Math.floor(rate);
        // check if there is a decimal part
        if(rate !== Math.floor(rate)){
            halfStars = 1;
        }
        emptyStars = maxSize - halfStars - fullStars;
    }


    return (
        <div className={"flex"}>
            {Array.from({length: fullStars}, (_,i) =>
                <FaStar style={{color: 'yellow', fontSize: '50px'}} />
            )}
            {Array.from({length: halfStars}, (_,i) =>
                <FaStarHalfStroke style={{color: 'yellow', fontSize: '50px'}} />
            )}

            {Array.from({length: emptyStars}, (_,i) =>
                <FaRegStar style={{color: 'yellow', fontSize: '50px'}} />
            )}


            {/*<FontAwesomeIcon icon={solid("star")} style={{color: "#edf849",}} />*/}
        </div>
    )
}
export default BookRating;
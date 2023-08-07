import React, {FC} from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BookModel from "../../../models/BookModel";
import {ShowABook} from "./ShowABook";

interface carouselProps {
    bookList: BookModel[];
}
export const Carousel: FC<carouselProps> = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <button className="slick-arrow slick-prev">Previous</button>,
        nextArrow: <button className="slick-arrow slick-next">Next</button>,
    };

    return (
        <Slider {...settings}>
            {props.bookList.map((book) => (
                <div key={book.bookId}>
                    <ShowABook book={book} />
                </div>
            ))}
        </Slider>
    );
};


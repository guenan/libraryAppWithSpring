import React, {FC, useState} from "react";
import {getBookModelListFromJsonBookList} from "../../../utilities/JsonModelExtracter";
import BookModel from "../../../models/BookModel";
const SearchBook: FC = () => {

    const [searchText, setSearchText] = useState("");
    const handleSearchClick = async () => {
        const searchUrl:string = `http://localhost:9002/api/books/searchNamedBooks?book_name=${searchText}`;

        let searchBookResult: BookModel[] = [];
        const response = await fetch(searchUrl)
            .then(
                async (response) => {
                    const jsonResponse = await response.json();
                    searchBookResult = getBookModelListFromJsonBookList(jsonResponse);
                }
            )
            .catch(
                (reason) => {
                    throw new Error(reason.message)
                }
            );
    }

    return (
            <div className={"flex justify-normal justify-center w-2/3 "}>
                <div className={"border-2 w-1/2 mr-4"}>
                    <input type={"text"} className={"w-full"} onChange={event => setSearchText(event.target.value)}/>
                </div>
                <div className={"border-2 mr-4 "}>
                    <button className={"px-4"} onClick={() => handleSearchClick()}>Search</button>
                </div>
                <div className={"border-2 "}>
                    <select>
                        <option>All</option>
                        <option>Fiction</option>
                        <option>Education</option>
                        <option>Fantasy</option>
                    </select>
                </div>
            </div>
    );
}
export default SearchBook;
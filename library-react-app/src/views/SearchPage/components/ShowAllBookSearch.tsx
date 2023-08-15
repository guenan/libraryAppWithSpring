import React, {FC, useState} from "react";
import BookModel from "../../../models/BookModel";
import ShowBookDetail from "./ShowBookDetail";
import Pagination from "./Pagination";
import {getBookModelListFromJsonBookList} from "../../../utilities/JsonModelExtracter";

interface ShowAllBookSearchProps{
    itemsPerPage: number;

}

const ShowAllBookSearch: FC<ShowAllBookSearchProps> = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [searchBookResult, setSearchBookResult] = useState<BookModel[]>([]);

    const indexOfLastItem = currentPage * props.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - props.itemsPerPage;
    const currentItemsListForCurrentPage = searchBookResult.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(searchBookResult.length / props.itemsPerPage);

    const renderedBookResultList = currentItemsListForCurrentPage.map(
        (element) => {
            return (<div key={element.bookId}>
                        <ShowBookDetail book={element} />
                    </div>);
        }
    );

    const handleSearchClick = async () => {
        const searchUrl:string = `http://localhost:9002/api/books/searchNamedBooks?book_name=${searchText}`;

        let searchBookResult: BookModel[] = [];
        const response = await fetch(searchUrl)
            .then(
                async (response) => {
                    const jsonResponse = await response.json();
                    searchBookResult = getBookModelListFromJsonBookList(jsonResponse);
                    setSearchBookResult(searchBookResult);
                }
            )
            .catch(
                (reason) => {
                    throw new Error(reason.message)
                }
            );
    }

    // take care of boundary condition like last and first pages
    const onNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const onPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);

    // @ts-ignore
    const handlePageChange = ({selected}) => {
        setCurrentPage(selected);
    };

    return (
        <div className={"flex flex-col h-screen justify-between"}>
            <div className={"my-5"}>
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
            </div>
            <div className={"mb-auto mt-10"}>
                {renderedBookResultList}
            </div>
            <div className={"flex justify-center mt-4"}>
                <Pagination
                    onNext={onNext}
                    onPrev={onPrev}
                    totalItems={searchBookResult.length}
                    pageNo={currentPage}
                    itemsPerPage={4}
                />
            </div>

        </div>
    );

}

export default ShowAllBookSearch;
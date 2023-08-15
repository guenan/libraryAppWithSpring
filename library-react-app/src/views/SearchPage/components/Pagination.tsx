import React, {FC} from "react";
import BookModel from "../../../models/BookModel";
import SearchPage from "../SearchPage";

interface PaginationProps{
    onNext:  () => void;
    onPrev: () => void;
    itemsPerPage: number;
    totalItems: number;
    pageNo: number;
}

const Pagination: FC<PaginationProps> = (props) => {
    const maxPages = Math.ceil(props.totalItems / props.itemsPerPage);
    return (
            <div className="flex justify-between p-4 bg-stone-900 text-white w-full">
                <div className="flex align-center">
                    <span>{props.totalItems} results found</span>
                </div>
                <div className="flex align-center">
                    <div className="flex ml-0.5 mr-4">
                        Page {props.pageNo} of {maxPages}
                    </div>
                    <div className="flex ml-0.5 mr-4">
                        <div className="">
                            <button onClick={props.onPrev} className="text-white border-0">
                                Previous
                            </button>
                        </div>
                    </div>
                    <div className="pagination-buttons">
                        <div className="pagination-button-wrapper">
                            <button onClick={props.onNext} className="pagination-button">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Pagination;
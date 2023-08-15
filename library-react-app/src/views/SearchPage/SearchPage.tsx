import React, {FC} from "react";
import ShowAllBookSearch from "./components/ShowAllBookSearch";

interface SearchPageProps{
    searchValue: string;
}

const SearchPage: FC<SearchPageProps> = (props) => {

    return (
        <div>
            <ShowAllBookSearch itemsPerPage={4} />
        </div>
    );
}
export default SearchPage;
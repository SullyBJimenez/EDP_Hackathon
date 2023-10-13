import { useState } from "react"
import { SearchResults } from "./SearchResults";

export const Search = () => {

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = async () => {
        console.log("Clicked search");
        const url = "http://localhost:2020/";
        const data = fetch(`${url}search`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Invalid search response");
                return response.json();
            })
            .then((data) => {
                setSearchResults(data);
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
        <div className="search_result_div">
            <div>
                <input
                    type="search"
                    className="searchInput"
                    placeholder="Search by employee name"
                    value={query}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                />
                <button
                    type="submit"
                    className="search-button"
                    onClick={handleSubmit}
                >Submit</button>
            </div>
            <div >
                Results:
                <SearchResults searchResults={searchResults} />
            </div>
        </div>
            
        </>
    );
};
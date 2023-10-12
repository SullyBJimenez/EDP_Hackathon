import { Link } from 'react-router-dom';

export function SearchResults({ searchResults }) {
    return (
        <Link className="search-results-table" to={`/employee/${searchResults._id}`}>
            <br></br>
            <img src={searchResults.avatar} width="50px"></img>
            <p style={pstyle}>{searchResults.firstName} {searchResults.lastName}</p>
        </Link>
    )
};

const pstyle = {
    display: "inline",
};
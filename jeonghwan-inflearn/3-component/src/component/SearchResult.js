import React from "react";
const SearchResult = ({data= []}) => {
    console.log(data);
    if(data.length <= 0) {
        return (
            <div className="empty-box">검색 결과가 없습니다.</div>
        )
    }
    return (
        <ul className="result">
            {data.map(({id, imageUrl, name}) => (
                <li key={id}>
                    <img src={imageUrl}  alt="a"/>
                    <p>{name}</p>
                </li>
            ))}
        </ul>
    );
}

export default SearchResult;
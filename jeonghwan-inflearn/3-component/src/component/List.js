import React from "react";

const List = ({data = [], onClicks, renderItem}) => {
    console.log('???');
    console.log(this);
    return (
        <ul className="list">
            {data.map((item, idx) => {
                return (
                    <li key={item.id} onClick={() => onClicks(item.keyword)}>
                        {renderItem(item, idx)}
                    </li>
                )
            })}
        </ul>
    )
}

export default List;
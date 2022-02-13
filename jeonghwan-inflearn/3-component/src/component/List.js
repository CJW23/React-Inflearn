import React from "react";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    renderItem(item, idx) {
        throw "awd";
    }

    render() {
        return (
            <ul className="list">
                {this.state.data.map((item, idx) => {
                    return (
                        <li key={item.id} onClick={() => this.props.onClick(item.keyword)}>
                            {this.renderItem(item, idx)}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

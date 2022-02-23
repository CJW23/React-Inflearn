import List from "./List";
import store from "../Store";
import {formatRelativeDate} from "../helpers";
import React from "react";

export default class HistoryList extends React.Component {
    constructor() {
        super();
        this.state = {
            historyList: []
        }
    }
    componentDidMount() {
        const historyList = store.getHistoryList();
        this.setState({historyList})
        console.log(historyList);
    }

    handleDeleteHistoryKeyword(event, keywordId) {
        event.stopPropagation();
        store.deleteHistoryKeyword(keywordId);
        this.setState({historyList: store.getHistoryList()});
    }

    render() {
        let test = (item) => this.renderItem(item);
        return (
            <List data={this.state.historyList} renderItem={test} onClick={e => this.props.onClick(e)} />
        )
    }

    renderItem(item) {
        return (
            <>
                <span>{item.keyword}</span>
                <span className="date">{formatRelativeDate(item.date)}</span>
                <button className="btn-remove"
                        onClick={e => this.handleDeleteHistoryKeyword(e, item.id)}/>
            </>
        )
    }
}
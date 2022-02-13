import List from "./List";
import store from "../Store";
import {formatRelativeDate} from "../helpers";
import React from "react";

export default class HistoryList extends List {
    componentDidMount() {
        const data = store.getHistoryList();
        this.setState({data})
    }

    handleDeleteHistoryKeyword(event, keywordId) {
        event.stopPropagation();
        store.deleteHistoryKeyword(keywordId);
        this.setState({historyList: store.getHistoryList()});
    }

    renderItem(item, idx) {
        return (
            <>
                <span>{item.keyword}</span>
                <span className="date">{formatRelativeDate(item.date)}</span>
                <button className="btn-remove" onClick={e => this.handleDeleteHistoryKeyword(e, item.id)}/>
            </>
        )
    }
}
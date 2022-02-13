import React from "react";
import Header from "./component/Header";
import SearchForm from "./component/SearchForm.js";
import SearchResult from "./component/SearchResult.js";
import KeywordList from './component/KeywordList'
import store from "./Store.js";
import Tabs, {TabType} from "./component/Tabs";
import HistoryList from "./component/HistoryList";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: "",
            searchResult: [],
            submitted: false,
            selectedTab: TabType.KEYWORD,
            // TODO
        };
    }

    handleChangeInput(searchKeyword) {
        if (searchKeyword.length <= 0) {
            this.handleReset();
        }

        this.setState({searchKeyword});
    }

    search(searchKeyword) {
        const searchResult = store.search(searchKeyword);
        this.setState({searchKeyword, searchResult, submitted: true});

    }

    handleReset() {
        this.setState({searchKeyword: "", submitted: false, searchResult: []});
    }

    onChangeTab(tabType) {

        this.setState({selectedTab: tabType});
    }

    render() {
        const {searchKeyword, searchResult, submitted, selectedTab} = this.state;

        return (
            <>
                <Header title="검색"/>
                <div className="container">
                    <SearchForm
                        value={searchKeyword}
                        onChange={(value) => this.handleChangeInput(value)}
                        onSubmit={() => this.search(searchKeyword)}
                        onReset={() => this.handleReset()}
                    />
                    <div className="content">
                        {submitted ?
                            (
                                <SearchResult data={this.state.searchResult}/>
                            ) :
                            (
                                <>
                                    <Tabs selectedTab={selectedTab} onChangeTab={(tab) => this.onChangeTab(tab)}/>
                                    {selectedTab === TabType.KEYWORD && <><KeywordList onClick={(keyword) => this.search(keyword)} /></>}
                                    {selectedTab === TabType.HISTORY && <><HistoryList onClick={(keyword) => this.search(keyword)} /></>}
                                </>
                            )}
                    </div>
                </div>
            </>
        );
    }
}

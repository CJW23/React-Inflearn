import storage from "./storage.js";
import {createNextId, createPastDate} from "./helpers.js";

const tag = "[Store]";

class Store {
    constructor(storage) {
        console.log(tag, "constructor");

        if (!storage) throw "no storage";

        this.storage = storage;
    }

    search(keyword) {
        this.addHistoryKeyword(keyword);
        return this.storage.productData.filter((product) =>
            product.name.includes(keyword)
        );
    }

    getKeywordList() {
        return this.storage.keywordData;
        // TODO
    }

    getHistoryList() {
        return this.storage.historyData.sort(this._sortHistory);
    }

    _sortHistory(h1, h2) {
        return h2.date > h1.date;
    }

    deleteHistoryKeyword(keywordId) {
        const idx = this.storage.historyData.findIndex(h => h.id === keywordId);
        this.storage.historyData.splice(idx, 1);
    }

    addHistoryKeyword(keyword) {
        const alreadyKeyword = this.storage.historyData.find(h => h.keyword === keyword);
        if(!!alreadyKeyword) {
            this.deleteHistoryKeyword(alreadyKeyword.id);
        }
        this.storage.historyData.push({id: createNextId(this.storage.historyData), keyword, date: createPastDate(1)});
    }
}

const store = new Store(storage);
export default store;

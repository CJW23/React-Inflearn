import React from "react";

export const TabType = {
    KEYWORD: "KEYWORD",
    HISTORY: "HISTORY",
};

const TabLabel = {
    [TabType.KEYWORD]: "추천 검색어",
    [TabType.HISTORY]: "최근 검색어",
};

const Tabs = ({selectedTab, onChangeTab}) => {
    return (
        <>
            <ul className="tabs">
                {Object.values(TabType).map((tabType) => (
                    <li
                        key={tabType}
                        className={selectedTab === tabType ? "active" : ""}
                        onClick={() => onChangeTab(tabType)/*this.setState({ selectedTab: tabType })*/}
                    >
                        {TabLabel[tabType]}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Tabs;
import React from "react";
import CollectionsSearchResult from "./CollectionsSearchResult";
import "font-awesome/css/font-awesome.min.css";

import './CollectionsFilter.css'
import sampleImg from './sample.png'
const CollectionsFilter = () => {
    return (
        <div>
            <div className="container">
                <div className="search-box">
                    <input type="text" className="search-input"  placeholder="&#xf002; Filter" />
                    <CollectionsSearchResult name={"Super liquids"} floorPrice={"0.0001123"} src={sampleImg} />
                    <CollectionsSearchResult name={"Super liquids"} floorPrice={"0.0001123"} src={sampleImg} />
                    <CollectionsSearchResult name={"Super liquids"} floorPrice={"0.0001123"} src={sampleImg} />
                    <CollectionsSearchResult name={"Super liquids"} floorPrice={"0.0001123"} src={sampleImg} />
                    <button className="loadmore">Load more</button>
                </div>
            </div>
        </div>
    )
}


export default CollectionsFilter;
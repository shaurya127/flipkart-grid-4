import React from "react";
import './CollectionsSearchResult.css'
const collectionsSearchResult = (props) => {
    return (
        <div>
            <div className="filter-card">
                <div>
                    <img src={props.src} className="card-image" />
                </div>
                <div className="filter-card-content">
                    <p className="filter-card-content-name">{props.name}</p>
                    <p className="filter-card-content-floorPrice">Floor Price = {props.floorPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default collectionsSearchResult
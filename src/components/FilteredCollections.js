import React from "react";
import Landingcard from './LandingCard'
import FillterCard from "./FillterCard";
const FilteredCollections = (props) => { //use the props to show specific nfts
    return (
        <div>
            {!props.filterOpen && <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
            </div>}
            {props.filterOpen && <div style={{ display: "flex", width: "70%", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <span className="filter-button">
                        Filter
                    </span>
                    <span className="filter-button">
                        Filter
                    </span>
                    {
                        props.filterOpen && <div style={{ width: "25%" }}>

                            <FillterCard />
                        </div>
                    }
                </div>
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
            </div>}
        </div>
    )
}
export default FilteredCollections;
import React from 'react'
import EachFilterCard from './EachFilterCard'
import styled from 'styled-components'

const Maincard = styled.div`
background: #131313;
box-shadow: 0px 4px 12px rgba(68, 68, 68, 0.15);
border-radius: 24px;
height:max-content;


`
const data = {
    rows: [
        {
            title: 'Title1',
            buttons: [{
                name: "Button1",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button3",
                url: "url12"
            },
            {
                name: "Button4",
                url: "url12"
            },
            {
                name: "Button5",
                url: "url12"
            },
            {
                name: "Button6",
                url: "url12"
            },

            ]
        },
        {
            title: 'Title 2',
            buttons: [{
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            ]

        },
        {
            title: 'Title 2',
            buttons: [{
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            ]

        },
        {
            title: 'Title 2',
            buttons: [{
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            ]

        },
        {
            title: 'Title 2',
            buttons: [{
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            ]

        },
        {
            title: 'Title 2',
            buttons: [{
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            ]

        },
    ],
}

const filterCard = () => {
    return (
        <Maincard style={{ paddingTop: "2rem" }}>
            <div>
                <EachFilterCard />
            </div>
        </Maincard>
    )
}

export default filterCard

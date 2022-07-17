import React, { useState, useEffect } from 'react'
import arrow_down from '../assets/images/arrow_down.svg'
import 'aos/dist/aos.css';
import styled from 'styled-components';

const Btn=styled.div`
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 100px;
width:5rem;
text-decoration: none !important;
display:flex;
align-items:center;
justify-content:center;
margin-top:.5rem;
font-size:.8rem;
color:white;
`

const EachFilterButton = ({ name, url }) => {


    return (
        <a href={`${url}`} style={{textDecoration:"none"}}>
            <Btn>{name}</Btn></a>
    )
}

export default EachFilterButton
import styled from "styled-components";
import img from "../images/background.png";

export const Container = styled.div`
  margin: 6rem;
  @media(max-width:1000px)
  {
    margin:2rem;
  }
`;
export const NavbarM = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
  background-image: url(${img});

`;
export const Logos = styled.div`

display:flex;
align-items:center;
justify-content:center;`;
export const Options = styled.div`
  color: white;
  display: flex;
  height: 100%;
  align-items: center;
`;
export const Button = styled.div`
  color: white;
  border-radius: 20px;
  font-size:18px;
`;
export const Gradient = styled.div`
  border: 4px solid;
  border-radius: inherit;
  border-image-slice: 1;
  border-width: 4px;
  border-image-source: linear-gradient(
    to left,
    rgba(242, 39, 78, 0.71),
    rgba(51, 48, 149, 1)
  );
`;
export const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1px;
`;
export const Item = styled.div`
  margin: 0 0.8rem;
  cursor:pointer
`;
export const H1 = styled.h1`
  font-size: 96px;
  line-height: 95px;
  text-align: right;
  background: linear-gradient(83.93deg, #ffffff 5.84%, #f5b4c3 101.22%);
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;
  text-transform: capitalize;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 0;
`;

export const GradientButton = styled.div`
  color: white;
  border-radius: 5px;
  width: 10rem;
  text-align: center;
  background: linear-gradient(
    126.21deg,
    #431e54 0%,
    #9930ef 14.24%,
    #a53db6 49.56%,
    #cb3f59 93.2%
  );

  padding: 0.5rem;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  margin: 1rem;
  cursor: pointer;
`;

export const GradientBorder = styled.div`
  background: linear-gradient(273.83deg, rgba(242, 39, 78, 0.71) -18.25%, #333095 113.47%);



  border-radius: 8px;
  color: #122dff;
  display: inline-block;
  font-size: 16px;
  padding: 3px;
  text-decoration: none;
`;
export const GradientSpan = styled.span`
  background:black;
  display: block;
  padding: .5em 2em;
  border-radius: 6px;
  color: white;
`;

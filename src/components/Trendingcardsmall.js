import styled from "styled-components";
import Trending1 from "../assets/images/trending1.png";

const Trendingimagetext = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 1rem;
  padding-top:1.5rem;
`;

const Cardtext = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 0.7rem;
  line-height: 1.5rem;
  color: #ffffff;
  width: max-content;
  padding: 1rem;
  height: 2rem;
  display: flex;
  align-items: center;
`;
const Trendingcardsmall = () => {
  return (
    <div
      style={{
        width: "23%",
        height: "48%",
        backgroundImage: `url(${Trending1})`,
        objectFit: "fill",
        borderRadius: "1rem",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginBottom: "1rem",
      }}
    >
      <Trendingimagetext>
        <Cardtext>Psychedelic art</Cardtext>
      </Trendingimagetext>
    </div>
  );
};

export default Trendingcardsmall;

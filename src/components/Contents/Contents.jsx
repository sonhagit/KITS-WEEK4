import styled from "styled-components";
import Banner from 'assets/banner.svg';
import NFT from "components/NFT/NFT";
import nft1 from 'assets/nft1.svg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const ContentsStyle = styled.div`
img{
  position: relative;
}
.text{
  position: absolute;
  top: -5%;
  left: -24%;
  transform: translate(50%, 50%) ;
  width: 536px;
  height: 130px;
  text-align: start;
}
p{
  font-family: 'DM Sans', sans-serif;
  font-size: 54px;
  line-height: 65px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);

}
.btn{
  margin-top: -33px;
}
.but{ 
  width: 128px;
  height: 46px;
  border-radius: 46px;
  border: none;
  margin-right: 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
}
.discover{
  color: rgba(84, 41, 255, 1);
}
.create{
  background-color: transparent;
  border: 1px solid white;
  color: rgba(255, 255, 255, 1);

}
.carousel {
  width: 716px;
  height: 354px;
}
`;

const Contents = () => {
  return (
    <ContentsStyle>
      <Carousel fade className="carousel" showThumbs={false}>
        <div>
          <img src={Banner} />
          <div className="text">
            <p>Discover, Create and Sell Your Own NFT.</p>
            <div className="btn">
              <button className="but discover">Discover</button>
              <button className="but create">Create</button>
            </div>
          </div>
        </div>
       
        <div>
          <img src={nft1} />
        </div>

      </Carousel>
      {/* <img src={Banner} />
      <div className="text">
        <p>Discover, Create and Sell Your Own NFT.</p>
        <div className="btn">
          <button className="but discover">Discover</button>
          <button className="but create">Create</button>
        </div>
      </div> */}
      <NFT></NFT>
    </ContentsStyle>
  )
}

export default Contents
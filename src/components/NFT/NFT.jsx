import styled from "styled-components";
import nft1 from "assets/nft1.svg"
import img1 from 'assets/img1.svg';
import img2 from 'assets/img2.svg';
import img3 from 'assets/img3.svg';
import img4 from 'assets/img4.svg';
import img5 from 'assets/img5.svg';
import img6 from 'assets/img6.svg';
import logoNFT from 'assets/logoNFT.svg';

const NftStyle = styled.div`
    .Menu{
        display: flex;
        justify-content: space-between;
    }
    .Menu p{
        font-family: 'DM Sans', sans-serif;
        color:rgba(39, 38, 46, 1);
        font-weight: bold;
        font-size: 24px;
        font-weight: 31px;

    }
    .Category{
        width: 276px;
        display: flex;
        justify-content: space-between;

    }
    .Category p{
        font-family: 'DM Sans', sans-serif;
        color: rgba(122, 121, 125, 1);
        font-size: 14px;
        font-weight: 18px;
    }
    .Nftcon{
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap

    }
`;
const NftContents = styled.div`
    margin-bottom: 20px;
    width: 348px;
    height: 364px;
    background-color: white;
    border: none;
    border-radius: 20px;
    .contain{
        padding: 12px;
    }
    .header{
        margin-top: -10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header .name{
        font-size: 24px;
        line-height: 31px;
        color: rgba(39, 38, 46, 1);
    }
    .header .like{
        font-size: 16px;
        line-height: 21px;
        color: rgba(116, 116, 117, 1);
        font-weight: normal;
    }
    .avatar{
        display: flex;
        text-align: center;
    }
    .avatar img{
        width: 28px;
        height: 28px;
    }
    .avatar span{
        color: rgba(116, 116, 117, 1);
        line-height: 21px;
        font-size: 16px;
    }
    .price{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .price p{
        color: rgba(116, 116, 117, 1);
        font-size: 16px;
        line-height: 21px;
    }
`;

const fakeData = [
    {
        img: nft1,
        nameNFT: "Ape In Love",
        like: "21,5K Likes",
        ava: img1,
        nickname: "@jordan_",
        logo: logoNFT,
        name: "Current Bid",
        price: "6.12 ETH"
    },
    {
        img: nft1,
        nameNFT: "Ape In Love",
        like: "21,5K Likes",
        ava: img1,
        nickname: "@jordan_",
        logo: logoNFT,
        name: "Current Bid",
        price: "6.12 ETH"
    },
    {
        img: nft1,
        nameNFT: "Ape In Love",
        like: "21,5K Likes",
        ava: img1,
        nickname: "@jordan_",
        logo: logoNFT,
        name: "Current Bid",
        price: "6.12 ETH"
    },
    {
        img: nft1,
        nameNFT: "Ape In Love",
        like: "21,5K Likes",
        ava: img1,
        nickname: "@jordan_",
        logo: logoNFT,
        name: "Current Bid",
        price: "6.12 ETH"
    },

]

const NFTT = ({ img, nameNFT, like, ava, nickname, logo, name, price }) => {
    return (
        <NftContents>
            <div className="contain">
                <img src={img} alt="img"></img>
                <div className="header">
                    <p className="name">{nameNFT}</p>
                    <p className="like">{like}</p>
                </div>
                <div className="avatar">
                    <img src={ava} alt="ava"></img>
                    <span>{nickname}</span>
                </div>
                <div className="price">
                    <p>{name}</p>
                    <div>
                        <img src={logo}></img>
                        <span>{price}</span>
                    </div>
                </div>

            </div>
        </NftContents>


    )
}

const NFT = () => {
    return (
        <NftStyle>
            <div className="Menu">
                <p>Trending Auctions</p>
                <div className="Category">
                    <p>Art</p>
                    <p>Music</p>
                    <p>Collectibles</p>
                    <p>Utility</p>
                </div>
            </div>
            <div className="Nftcon">
                {/* <NFTT img={nft1} nameNFT={"Ape In Love"} like={"21,5K Likes"} ava={img1} nickname={"@johnti60"} name={"Current Bid"} logo={logoNFT} price={"6.12 ETH"}></NFTT> */}
                {
                    fakeData.map((item) => <NFTT img={item.img} nameNFT={item.nameNFT} like={item.like} ava={item.ava}
                    nickname={item.nickname} name={item.name} logo={item.logo} price={item.price}></NFTT>)
                }
            </div>
        </NftStyle>
    )
}
export default NFT

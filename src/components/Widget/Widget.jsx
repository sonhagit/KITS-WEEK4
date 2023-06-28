import styled from 'styled-components';
import { Button } from 'components/Button';
import Ethereum from 'assets/Ethereum.svg';


const Wig = styled.div`
    width: 126px;
    height: 167px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    padding: 0px 21px 0px 21px;
    margin-right: 20px;
    margin-bottom: 20px;
    .text{
        font-family: 'DM Sans', sans-serif;
        font-size: 14px;
        line-height: 18px;
        color: rgba(116, 116, 117, 1);
    }
    .price{
        font-family: 'DM Sans', sans-serif;

    }
    .price-price{
        font-size: 32px;
        margin-left: 5px;

    }
    .unit{
        margin-left: 5px;
        font-size: 12px;
        color: rgba(116, 116, 117, 1);
    }
    Button{
        margin-top: 20px;
    }
`;


export const Widget = ({  boderColor, percent, text, price, unit, img }) => {
    return (
        <Wig>
            <p className='text'>{text}</p>
            <div className='price'>
                {/* <img src={img}></img> */}
                {unit !== "ETH" ? "+" : <img src={Ethereum}></img>}
                <span className='price-price'>{price}</span>
                <span className='unit'>{unit}</span>
            </div>
            <Button boderColor={boderColor} percent={percent}></Button>
        </Wig>
    )
}
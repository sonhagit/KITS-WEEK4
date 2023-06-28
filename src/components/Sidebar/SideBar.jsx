import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from 'assets/Logo.svg';
import Menu1 from 'assets/Menu1.svg';
import Menu2 from 'assets/Menu2.svg';
import Menu3 from 'assets/Menu3.svg';
import Menu4 from 'assets/Menu4.svg';
import Menu5 from 'assets/Menu5.svg';
import Menu6 from 'assets/Menu6.svg';
import Menu7 from 'assets/Menu7.svg';
import Menu8 from 'assets/Menu8.svg';
import Menu9 from 'assets/Menu9.svg';
import ETH from 'assets/ETH.svg';
import plus from 'assets/Plus.svg';
import dark from 'assets/dark.svg';
import light from 'assets/light.svg';
import RightArrow from 'assets/RightArrow.svg';






const SideBarStyled = styled.div`
  background-color: white;
  float: left;
  min-width: 19%;
  height: auto;
  padding-left: 42px;
  padding-top: 40px;
  img{
        margin-right: 25px;
    }
  .TopMenu{
        margin-bottom: 27px;
        font-family: 'DM Sans', sans-serif;
        font-size: 16px;
        line-height: 21px;
        color: rgba(116, 116, 117, 1);
        display: flex;
    }
  
`;


const MenuStyled = styled.div`
    margin-top: 40px;
    h3{
        font-family: 'DM Sans', sans-serif;
        font-size: 12px;
        line-height: 16px;
        font-weight: bold;
        margin-bottom: 25px;
    }
    .nav{
        text-decoration: none;
        color: rgb(116, 116, 117);
    }

`;

const CardStyle = styled.div`
    width: 228px;
    height: 190px;
    background-image: linear-gradient(to top left, rgba(84, 41, 255, 1)
 , rgba(187, 170, 255, 1));
    color: white;
    margin-bottom: 40px;
    text-align: center;
    padding-top: 20px;
    border-radius: 20px;
    font-family: 'DM Sans', sans-serif;
    .YB {
        color: rgba(224, 222, 229, 1);
        font-size: 12px;
        line-height: 16px;
    }
    .amount{
        color: rgba(255, 255, 255, 1);
        font-size: 30px;
        line-height: 39px;
        font-weight: bold;
        margin-top: -2px;
        margin-bottom: 9px;
    }
    .ETH{
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        line-height: 16px;
        margin-left: -17px;
    }
`;

const StyleBtn = styled.button`
    font-family: 'DM Sans', sans-serif;
    margin-left: 18px;
    margin-top: 10px;
    width: 196px;
    height: 49px;
    border: none;
    border-radius: 12px;
    color: rgba(39, 38, 46, 1) ; 
    font-size: 14px;
    line-height: 21px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
`;

const StyleToggle = styled.div`
    .input {
    visibility: hidden;
    }

    .label {
    position: absolute;
    background: lightgray;
    width: 45px;
    height: 24px;
    border-radius: 20px;
    cursor: pointer;
    }

    .circle {
    position: absolute;
    background: rgb(0, 0, 0);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    animation: toggleoff 0.4s linear forwards;
    }

    .input:checked + .label {
    background-color: rgb(127, 127, 139);
    }

    .input:checked + .label .circle {
    background-color: rgb(255, 255, 255);
    animation: toggleon 0.4s linear forwards;
    }

    @keyframes toggleon {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(18px);
    }
    }

    @keyframes toggleoff {
    0% {
        transform: translateX(18px);
    }

    100% {
        transform: translateX(0);
    }
    }
    /* margin-left: 20px;
    margin-top: 2px;
    .checkbox {
        opacity: 0;
        position: absolute;
        }
    .checkbox-label {
        background-color: #111;
        width: 30px;
        height: 7px;
        border-radius: 50px;
        position: relative;
        padding: 5px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
}   
    .checkbox-label .ball {
        background-color: #fff;
        width: 13px;
        height: 13px;
        position: absolute;
        left: 2px;
        top: 2px;
        border-radius: 50%;
        transition: transform 0.2s linear;
}
    .checkbox:checked + .checkbox-label .ball {
        transform: translateX(23px);
} */

`;
// ----------------------Change background--------------------------
// const inputEl = document.querySelector(".input");

// const bodyEl = document.querySelector("body");

// inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// updateBody();

// function updateBody() {
//   if (inputEl.checked) {
//     bodyEl.style.background = "black";
//   } else {
//     bodyEl.style.background = "lightgrey";
//   }
// }

// inputEl.addEventListener("input", () => {
//   updateBody();
//   updateLocalStorage();
// });

// function updateLocalStorage() {
//   localStorage.setItem("mode", JSON.stringify(inputEl.checked));
// }
//------------------------------------------------------------------------

const Toggle = () => {
    return (
        <StyleToggle>
            {/* <input type="checkbox" className="checkbox" id="checkbox"></input>
            <label for="checkbox" className="checkbox-label">
                <span className="ball"></span>
            </label> */}
            <input type="checkbox" class="input" id="dark-mode" />
            <label for="dark-mode" class="label"><div class="circle"></div></label>



        </StyleToggle>
    )
}


const SideBar = () => {
    return (
        <SideBarStyled>
            <img src={Logo}></img>
            <MenuStyled>
                <div className="TopMenu">
                    <NavLink className="nav" to="/a">
                        <img src={Menu1}></img>
                        <a>Dashboard</a>
                    </NavLink>

                </div>
                <div className="TopMenu">
                    <NavLink className="nav">
                        <img src={Menu2}></img>
                        <a>Market</a>
                    </NavLink>

                </div>
                <div className="TopMenu">
                    <NavLink className="nav">
                        <img src={Menu3}></img>
                        <a>Active Bids</a>
                    </NavLink>

                </div>
            </MenuStyled>
            <MenuStyled>
                <h3>PROFILE</h3>
                <div className="TopMenu">
                    <NavLink className="nav">
                        <img src={Menu4}></img>
                        <a>My Portfolio</a>
                    </NavLink>

                </div>
                <div className="TopMenu">
                    <NavLink className="nav">
                        <img src={Menu5}></img>
                        <a>Wallet</a>
                    </NavLink>

                </div>
                <div className="TopMenu">
                    <NavLink className="nav">
                        <img src={Menu6}></img>
                        <a>Favorites</a>
                    </NavLink>

                </div>
                <div className="TopMenu">
                    <NavLink className="nav">
                        <img src={Menu7}></img>
                        <a>History</a>
                    </NavLink>

                </div>
                <div className="TopMenu">
                    <NavLink className="nav">
                        <img src={Menu8}></img>
                        <a>Settings</a>
                    </NavLink>

                </div>
            </MenuStyled>
            <MenuStyled>
                <h3>OTHER</h3>
                <div className="TopMenu">
                    <img src={Menu9}></img>
                    <a>Settings</a>
                    <Toggle></Toggle>

                </div>
            </MenuStyled>
            <CardStyle>
                <p className="YB">Your Balance</p>
                <p className="amount">1,034.02</p>
                <img src={ETH}></img>
                <span className="ETH">ETH</span>
                <StyleBtn>
                    <img src={plus}></img>
                    <span>Top Up Balance</span>
                    <img src={RightArrow}></img>
                </StyleBtn>
            </CardStyle>
        </SideBarStyled>
    )
}

export default SideBar;


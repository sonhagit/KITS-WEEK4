import styled from "styled-components";
import Logo from "assets/Logo.svg";
import Facebook from "assets/Facebook.svg";
import Github from "assets/Github.svg";
import Google from "assets/Google.svg";
import LoginImg from "assets/LoginImg.svg";
import { LogoMyNFT } from "components/LogoMyNFT";



const LoginStyle = styled.div`
    width: 1920px;
    height: 1080px;
    background-image: linear-gradient(to right,rgba(255, 255, 255, 1), rgba(187, 170, 255, 1));
    font-family: 'Poppins', sans-serif;


`;
const LoginForm = styled.div`
    padding-top: 255px;
    padding-left: 265px;
    position: relative;
    .loginimg{
        position: absolute;
        top: -12%;
        left: 47%;
    }
  
`;
const FormStyle = styled.div`
    width: 478px;
    .Log{
        font-size: 56px;
        line-height: 45px;
        font-weight: bold;
    }
    .formlogin input{
        height: 46px;
        width: 100%;
        border-radius: 4px;
        border: none;
        background-color: rgba(187, 170, 255, 0.5);
    }
    .formlogin p{
        font-size: 16px;
        line-height: 24px;
    }
    .formlogin a{
        font-size: 14px;
        line-height: 21px;
        color:rgba(0, 0, 0, 1);
        opacity: 50%;
    }
    button{
        color: white;
        background-color: rgba(84, 41, 255, 1);
        width: 126px;
        height: 37px;
        border: none;
        border-radius: 20px;
        font-size: 16px;
        line-height: 24px;
        /* margin: 20px 178px; */
    }
    .continue p {
        color: rgba(84, 41, 255, 1);
        font-size: 14px;
        line-height: 16px;
        text-align: center;

    }
    .sociall{
        display: flex;
        justify-content: space-between;
        width: 478px;
        margin-bottom: 20px;
        
    }
    .sociall button{
        width: 125px;
        height: 50px;
        border: 1px solid #5429FF;
        border-radius: 40px;
        background-color: #FFFFFF;
    }
    .sociall img{
        margin: 11px 0px;
    }
    .sociall span{
        
    }
`;


function Login() {
    return (
        <LoginStyle>
            <LoginForm>
                <FormStyle>
                    {/* <LogoMyNFT></LogoMyNFT> */}
                    <img src={Logo}></img>
                    <p className="Log">Log In</p>
                    <form className="formlogin">
                        <p>Username</p>
                        <input type="text"></input>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p>Password</p>
                            <p><a>Foggot Password?</a></p>
                        </div>
                        <input type="password"></input>
                        <button style={{ margin: "20px 178px" }}>Login</button>
                    </form>
                    <div className="continue">
                        <p>or continue with</p>
                        <div className="sociall">
                            <button><img src={Google}></img></button>
                            <button><img src={Github}></img></button>
                            <button><img src={Facebook}></img></button>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <span style={{ fontSize: "14px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.5)" }}>Don’t have an account yet?</span>
                            <span style={{ fontSize: "14px", lineHeight: "19px", color: "rgba(84, 41, 255, 1)" }}>Sign up for free</span>
                        </div>

                    </div>

                </FormStyle>
                <img className="loginimg" src={LoginImg}></img>
            </LoginForm>

        </LoginStyle>
    )

}

export default Login;
import styled from "styled-components";
import sreach from 'assets/sreach.svg';
import noti from 'assets/noti.svg';
import img1 from 'assets/img1.svg';




const HeaderStyled = styled.div`
  /* position: fixed;
  z-index: 99; */
  width: 72%;
  height: 56px;
  display: flex;
  justify-content: space-between ;
  /* background-color: rgba(202, 234, 230, 1); */
  padding-top: 32px;
  padding-left: 32px;
  font-family: 'DM Sans', sans-serif;
  .noti{
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    background-color: white;
  }

`;

const InputStyle = styled.div`
  input{
    position: relative;
    width: 461px;
    height: 56px;
    border-radius: 35px;
    border: none;
    padding-left: 60px;
    font-size: 16px;
    line-height: 21px;
  }
  .sreach{
    position: absolute;
    top: 5%;
    left: 30%;
    transform: translate(78%, 57%);

  }
`;
const RightStyle = styled.div`
  display: flex;
  position: relative;
  .noti img{
    position: absolute;
    top: 5%;
    left: 5%;
    transform: translate(50%, 50%);
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <InputStyle>
        <input type="text" placeholder="Search Item, Collection and Account.."></input>
        <img className="sreach" src={sreach}></img>
      </InputStyle>
      <RightStyle>
        <div className="noti">
          <img src={noti}></img>
        </div>
        <img src={img1}></img>
      </RightStyle>
    </HeaderStyled>
  );
};

export default Header;
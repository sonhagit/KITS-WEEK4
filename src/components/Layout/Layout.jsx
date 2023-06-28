import Header from "components/Header";
import styled from "styled-components";
import Contents from "components/Contents/Contents";
import SideBar from "components/Sidebar/SideBar";



const LayoutStyled = styled.div`
  background-color: rgba(202, 234, 230, 1);
  width: 1482px;
  margin: 0 auto;
`;
const RightStyle = styled.div`
    margin-right: 10px;
    width: 78%;
    .right{
      display: flex;
      padding-left: 36px;
      padding-top: 40px;
    }
`;
const ContentStyled = styled.div`
  /* background-color: rgba(202, 234, 230, 1); */
  height: 100vh;
  padding-left: 10px;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBar></SideBar>
      <Header ></Header>
      <RightStyle >
        <div className="right">
          <Contents>
          </Contents>
          <ContentStyled>{children}</ContentStyled>
        </div>

      </RightStyle>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
import styled from 'styled-components';
import img1 from 'assets/img1.svg';
import img2 from 'assets/img2.svg';
import img3 from 'assets/img3.svg';
import img4 from 'assets/img4.svg';
import img5 from 'assets/img5.svg';
import img6 from 'assets/img6.svg';




const StyleCreator = styled.div`
height: 526px;
width: 327px;
border: none;
border-radius: 16px;
background-color: rgba(255, 255, 255, 1);
padding: 0 30px;
font-family: 'DM Sans', sans-serif;
;
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tc{
    color: rgba(39, 38, 46, 1);
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
}
.sa{
    color: rgba(116, 116, 117, 1);
    font-size: 16px;
    line-height: 21px;
}
`;

const TableStyle = styled.table`
    font-family: 'DM Sans', sans-serif;
    padding: 5px;
    table-layout: auto;
    width: 338px;  
    button{
        width: 77px;
        height: 32px;
        border-radius: 20px;
        background-color: rgba(84, 41, 255, 0.1);
        border: none;
        font-size: 12px;
        line-height: 16px;
        color: rgba(84, 41, 255, 1);
        margin-left: 10px;
    }
    table{
        width: 100%;
    }
    .name{
        font-size: 16px;
        line-height: 21px;
        font-weight: bold;
        margin-top: 9px;
    }
    .nickname{
        font-size: 12px;
        line-height: 16px;
        color: rgba(116, 116, 117, 1);
        margin-top: -14px;
    }
    .btnn{
        text-align: right;
    }
    
`;

const Creator = ({ count, image, name, nickname }) => {
    return (
        <TableStyle>
            <>
                <tr>
                    <td>
                        {count}.
                    </td>
                    <td>
                        <img src={image} alt="avt" />
                    </td>
                    <td>
                        <p className='name'>{name}</p>
                        <p className='nickname'>{nickname}</p>
                    </td>
                    <td className='btnn'>
                        <button>Folow</button>
                    </td>
                </tr>
            </>
        </TableStyle>

    )
}

const fakeData = [
    {
        count: "1",
        image: img1 ,
        name: "Michael Jordan",
        nickname: "@jordan_",
    },
    {
        count: "2",
        image:  img2 ,
        name: "John Tibao",
        nickname: "@johnti60",
    },
    {
        count: "3",
        image: img3 ,
        name: "Teressa",
        nickname: "@teressa",
    },
    {
        count: "4",
        image: img4 ,
        name: "Johan Hawn",
        nickname: "@jordan_",
    },
    {
        count: "5",
        image: img5 ,
        name: "Maria Alisson",
        nickname: "@m_alisson",
    },
    {
        count: "6",
        image: img6 ,
        name: "Sam Erricson",
        nickname: "@erricsonsam",
    },

]

export const TopCreator = () => {
    return (
        <StyleCreator>
            <div className='top'>
                <p className='tc'>Top Creator</p>
                <p className='sa'>See all</p>

            </div>
            {
                fakeData.map((item) => <Creator count={item.count} image={item.image} name={item.name} nickname={item.nickname}></Creator>)

            }
            {/* <Creator
                count={"1"}
                image={img1}
                name={"Michael Jordan"}
                nickname={"@jordan_"}>
            </Creator>
            <Creator
                count={"2"}
                image={img2}
                name={"John Tibao"}
                nickname={"@johnti60"}>
            </Creator>
            <Creator
                count={"3"}
                image={img3}
                name={"Teressa"}
                nickname={"@teressa"}>
            </Creator>
            <Creator
                count={"4"}
                image={img4}
                name={"Johan Hawn"}
                nickname={"Johan Hawn"}>
            </Creator>
            <Creator
                count={"5"}
                image={img5}
                name={"Maria Alisson"}
                nickname={"@m_alisson"}>
            </Creator>
            <Creator
                count={"6"}
                image={img6}
                name={"Sam Erricson"}
                nickname={"@erricsonsam"}>
            </Creator> */}


        </StyleCreator>
    )
}

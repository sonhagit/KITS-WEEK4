import { Widget } from 'components/Widget';
import { TopCreator } from 'components/TopCreator';
import { PrimaryLayout } from "components/Layout";

const fakeData = [
  {
    text: "Revenue",
    price: 5.00,
    percent: 12.3,
  },
  {
    text: "Spending",
    price: 2.00,
    percent: 12.3,
  },
  {
    text: "ROI",
    price: 14.2,
    percent: 12.3,
  },
  {
    text: "Estimated",
    price: 7.00,
    percent: -3.2,
  }
]

const Home = () => {
  return (
    <PrimaryLayout>
      <div className="App">

        <div className='card'>
          {/* {
            fakeData.map((item) => <Widget text={item.text} price={item.price} percent={item.percent}></Widget>)
          } */}
          <Widget
            percent={12.3}
            text={"Revenue"}
            price={"5.00"}
            unit={"ETH"} >
          </Widget>
          <Widget
            percent={12.3}
            text={"Revenue"}
            price={"5.00"}
            unit={"ETH"} >
          </Widget>
          <Widget
            percent={-12.3}
            text={"ROI"}
            price={"14.02"}
            unit={"%"} >
          </Widget>
          <Widget
            boderColor={"red"}
            percent={12.3}
            text={"Revenue"}
            price={"5.00"}
            unit={"ETH"} >
          </Widget>

        </div>
        <div>
          <TopCreator></TopCreator>
        </div>

      </div>
    </PrimaryLayout>


  );
};

export default Home;
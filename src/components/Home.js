import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assetItem, assetFilter } from '../redux/Home';
import Asset from './Asset';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const assetList = useSelector((state) => state.assetReducer);
  useEffect(() => {
    dispatch(assetItem());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = (e) => {
    dispatch(assetFilter(e.target.value));
  };

  return (
    <section className="sectionDiv">
      <div className="optionDiv">
        <div className="option">
          <select className="desc" onChange={changeHandler}>
            <option value="price"> Rank </option>
            <option value="name"> Name </option>
            <option value="vol"> High Price </option>
          </select>
        </div>
      </div>
      <ul className="assetList">
        {assetList.map((coin) => (
          <Asset
            key={coin.id}
            id={coin.id}
            symbol={coin.symbol}
            price={coin.priceUsd.substring(0, 12)}
            change={coin.changePercent24Hr}
          />
        ))}
      </ul>
    </section>
  );
};

export default Home;

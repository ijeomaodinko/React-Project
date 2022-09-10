import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assetItem, assetFilter } from '../redux/Home';
import Asset from './Asset';
import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const assetList = useSelector((state) => state.assetReducer);

  const [searchCoin, setSearchCoin] = useState('');
  useEffect(() => {
    dispatch(assetItem());
  }, [searchCoin]);

  const filterCoin = assetList.filter((coins) => (
    coins.name.toLowerCase().includes(searchCoin.toLowerCase())));

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearchCoin(value);
  };

  const taskHandler = (e) => {
    dispatch(assetFilter(e.target.value));
  };

  return (
    <section className="sectionDiv">
      <div className="optionDiv">
        <div className="option">
          <select className="desc" onChange={taskHandler}>
            <option value="price"> Rank </option>
            <option value="name"> Name </option>
            <option value="vol"> High Price </option>
          </select>
        </div>
        <div className="formDiv">
          <input
            type="text"
            className="search"
            name="coinSearch"
            placeholder="Enter the coin..."
            required
            onChange={changeHandler}
          />
        </div>
      </div>
      <ul className="assetList">
        {filterCoin.map((coin) => (
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
}

export default Home;

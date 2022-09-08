import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assetItem, assetFilter } from '../redux/Home';
import Asset from './Asset';

const Home = () => {
  const dispatch = useDispatch();
  const assetList = useSelector((store) => store.assetReducer);
  useEffect(() => {
    dispatch(assetItem());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = (e) => {
    dispatch(assetFilter(e.target.value));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    window.location.href = `/detail/${e.target.coinSearch.value}`;
  };

  return (
    <section>
      <div className="optionDiv">
        <div className="option">
          <select className="desc" onChange={changeHandler}>
            <option value="price"> Rank </option>
            <option value="name"> Name </option>
            <option value="vol"> High Price </option>
          </select>
        </div>
        <div className="formDiv">
          <form className="searchForm" onSubmit={searchHandler}>
            <input type="text" name="coinSearch" placeholder="Enter Crypto name ..." required />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
      <ul className="assetList">
        {assetList.map((coin) => (
          <Asset
            key={coin.id}
            id={coin.id}
            symbol={coin.symbol}
            price={coin.priceUsd.substring(0, 6)}
            change={coin.changePercent24Hr}
          />
        ))}
      </ul>
    </section>
  );
};

export default Home;

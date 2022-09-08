import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { assetSingle } from '../redux/Detail';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const coin = useSelector((state) => state.detailReducer);
  useEffect(() => {
    dispatch(assetSingle(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="modalDiv">
        <NavLink to="/">
          <p>&close</p>
        </NavLink>
        <div><h1>{coin.name}</h1></div>
        <div>
          <div>
            <h2>Symbol:</h2>
            <span>

              {coin.symbol}
            </span>
          </div>
          <div>
            <h2>Rank:</h2>
            <span>
              {coin.rank}
            </span>
          </div>
        </div>
        <div>
          <h3>Max Supply:</h3>
          <span>{coin.maxSupply}</span>
        </div>
        <div>
          <h3>Price USD:</h3>
          <p>{coin.priceUsd}</p>
        </div>
        <div>
          <p>Change Percentage 24Hr</p>
          <span>{coin.changePercent24Hr}</span>
        </div>
      </div>
    </section>
  );
};

export default Detail;

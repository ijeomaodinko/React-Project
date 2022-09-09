import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { assetSingle } from '../redux/Detail';
import back from './assets/back.png';
import './Detail.css';

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
          <img className="home" src={back} alt="back" />
        </NavLink>
        <div><h1>{coin.name}</h1></div>
        <div>
          <div>
            <p>
              Symbol:
              <span>{coin.symbol}</span>
            </p>
          </div>
          <div>
            <p>
              Rank:
              <span>{coin.rank}</span>
            </p>
          </div>
        </div>
        <div>
          <p>
            Supply:
            <span>{coin.supply}</span>
          </p>
        </div>
        <div>
          <p>
            Price USD:
            <span>{coin.priceUsd}</span>
          </p>
        </div>
        <div>
          <p>
            Change Percentage 24Hr:
            <span>{coin.changePercent24Hr}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;

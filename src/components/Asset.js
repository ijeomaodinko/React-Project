import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Asset = (props) => {
  const {
    id,
    symbol,
    price,
  } = props;

  return (
    <NavLink className="asset" to={`/detail/${id}`}>
      <h2>{symbol}</h2>
      <h5>{id}</h5>
      <p>
        $
        {price}
      </p>
    </NavLink>
  );
};

export default Asset;

Asset.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

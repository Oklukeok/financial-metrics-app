import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  FaChartLine,
  FaMoneyBillWaveAlt,
  FaClock,
  FaStore,
  FaCaretUp,
  FaCaretDown,
  FaChevronLeft,
} from 'react-icons/fa';

const Detail = () => {
  const fetchedCoins = useSelector((state) => state.coinSlice);
  const { id } = useParams();
  const thisCoin = fetchedCoins.allCoins.filter((coin) => coin.id === id);
  return (
    <section className="coin-container">
      <Link className="back-button" to="/">
        <FaChevronLeft />
        {' BACK'}
      </Link>
      <div className="top-detail">
        <div
          className={`${thisCoin[0].id} coin-image detail-image default-image`}
        >
          .
        </div>
        <div>
          <p className="coin-name">{`${thisCoin[0].name} : ${thisCoin[0].symbol}`}</p>
          <p className="price-detail">
            <small>
              {thisCoin[0].changePercent24Hr[0] === '-' ? (
                <FaCaretDown className="downHome" />
              ) : (
                <FaCaretUp className="upHome" />
              )}
            </small>
            {`Price: $ ${parseFloat(thisCoin[0].priceUsd).toFixed(2)}`}
          </p>
          <p className="rank-detail">
            {`Rank: ${thisCoin[0].rank}`}
            <button
              type="button"
              onClick={() => window.open(thisCoin[0].explorer)}
            >
              Visit website
            </button>
          </p>
        </div>
      </div>
      <div className="bottom-detail">
        <div className="detail-card">
          PRICE CHANGE 24HR
          <FaMoneyBillWaveAlt />
          <p className="price">

            {thisCoin[0].changePercent24Hr[0] === '-' ? (
              <FaCaretDown className="downHome" />
            ) : (
              <FaCaretUp className="upHome" />
            )}

            {`$ ${parseFloat(thisCoin[0].changePercent24Hr).toFixed(2)}`}
          </p>
        </div>
        <div className="supply detail-card">
          SUPPLY STATS
          <FaChartLine />
          <p>
            {`Maximum supply: ${parseFloat(thisCoin[0].maxSupply).toFixed(0)}`}
          </p>
          <p>
            {`Current supply: ${parseFloat(thisCoin[0].supply).toFixed(0)}`}
          </p>
        </div>
        <div className="24hour detail-card">
          VOLUME STATS: 24 HR
          <FaClock />
          <p>
            {`Trading Volume: $ ${parseFloat(thisCoin[0].volumeUsd24Hr).toFixed(
              2,
            )}`}
          </p>
          <p>
            {`Weighted Average: $ ${parseFloat(thisCoin[0].vwap24Hr).toFixed(
              2,
            )}`}
          </p>
        </div>
        <div className="market detail-card">
          MARKET STATS
          <FaStore />
          <p>
            {`Market Cap: $ ${parseFloat(thisCoin[0].marketCapUsd).toFixed(2)}`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TwinSpin } from 'react-cssfx-loading';
import { FaArrowCircleRight, FaCaretUp, FaCaretDown } from 'react-icons/fa';
import { searchCoins } from '../Redux/coins/coins';

const Home = () => {
  const fetchedCoins = useSelector((state) => state.coinSlice);
  const dispatch = useDispatch();

  const { loading } = fetchedCoins;

  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
    const { title } = inputText;
    dispatch(searchCoins(title));
  };

  const displayCoins = fetchedCoins.searchedCoins.length !== 0
    ? fetchedCoins.searchedCoins
    : fetchedCoins.defaultCoins;

  return (
    <section className="coin-container">
      <div className="operations">
        <form className="form-container">
          <input
            type="text"
            className="input-text"
            placeholder="Search other currency..."
            value={inputText.title}
            onChange={onChange}
            name="title"
          />
        </form>
      </div>
      <p className="coins-heading">
        {fetchedCoins.searchedCoins.length !== 0
          ? `${fetchedCoins.searchedCoins.length} CURRENCIES FOUND`
          : 'TOP 20 CURRENCIES'}
      </p>
      {!loading ? (
        <ul className="coins-container">
          {displayCoins.map((coin) => (
            <li key={coin.id} className="coin-wrapper">
              <Link to={coin.id}>
                <div className={`${coin.id} coin-image default-image`}>
                  <FaArrowCircleRight />
                </div>
                <p className="coin-symbol">{coin.name.toUpperCase()}</p>
                <div className="home-detail">
                  <small>
                    {coin.changePercent24Hr[0] === '-' ? (
                      <FaCaretDown className="downHome" />
                    ) : (
                      <FaCaretUp className="upHome" />
                    )}
                  </small>
                  <small>{`$ ${parseFloat(coin.priceUsd).toFixed(2)}`}</small>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <TwinSpin />
      )}
    </section>
  );
};

export default Home;

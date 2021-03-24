import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Tr } from "styled-bootstrap-components"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"

const Coin = (props) => {
  // { index, coins, coin }
  const [favorite, setFavorite] = useState(false)
  const [favoritesList, setFavoritesList] = useState([])

  const favoriteCoin = (coin) => {
    if (!favorite) {
      setFavorite(true)
      setFavoritesList((favoritesList) => [...favoritesList, { coin }])
      props.onFavoriteCoin(props.coin)
    } else {
      setFavorite(false)
    }
  }
  useEffect(() => {
    // console.log(props)
  }, [])
  return (
    <CoinWrapper>
      <th>
        <button
          type="button"
          className="favorite-btn"
          onClick={() => favoriteCoin(props.coin, props.index)}
        >
          <FontAwesomeIcon
            icon={faStar}
            className={`icon ${favorite ? "favorite" : "not-favorited"}`}
          />
        </button>
      </th>
      <th>{props.index + 1}</th>
      <th className="name">
        <div className="main-cell">
          <div>
            <img src={props.coin.image} alt={props.coin.name} />
          </div>
          <div className="coin-name">{props.coin.name}</div>
        </div>
      </th>
      <th className="symbol">{props.coin.symbol}</th>
      <th>
        $
        {props.coin.current_price.toLocaleString(undefined, {
          maximumFractionDigits: 6,
        })}
      </th>
      <th>${props.coin.market_cap.toLocaleString()}</th>
      <th>
        {props.coin.circulating_supply.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })}
      </th>
    </CoinWrapper>
  )
}

export default Coin

const CoinWrapper = styled.tr`
  & th {
    color: #9b9b9b;
    font-size: 0.85rem;

    & .favorite-btn {
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
      color: #9b9b9b;

      & .favorite {
        color: #fc6;
      }
    }

    & .icon {
      transition: 0.25s ease;
      cursor: pointer;
    }

    &.name {
      color: #fff;
      width: 20%;

      & div {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        & .coin-name {
          text-align: left;
          margin-left: 1.25rem;
          font-size: 0.8rem;
        }
      }

      & img {
        max-width: 1rem;
        max-height: auto;
      }
    }

    &.symbol {
      text-transform: uppercase;
      font-size: 0.7rem;
    }
  }
`

import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Tr } from "styled-bootstrap-components"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"

const Coin = ({ index, img, name, symbol, price, cap, supply }) => {
  useEffect(() => {
    console.log(price, cap, supply)
  }, [])
  return (
    <CoinWrapper>
      <th scope="col" className="heading">
        <button type="button" className="favorite-btn">
          <FontAwesomeIcon icon={faStar} className="icon" />
        </button>
      </th>
      <th>{index + 1}</th>
      <th className="name">
        <div className="main-cell">
          <div>
            <img src={img} alt={name} />
          </div>
          <div className="coin-name">{name}</div>
        </div>
      </th>
      <th className="symbol">{symbol}</th>
      <th>
        $
        {price.toLocaleString(undefined, {
          maximumFractionDigits: 6,
        })}
      </th>
      <th>${cap.toLocaleString()}</th>
      <th>
        {supply.toLocaleString(undefined, {
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
    font-size: 0.9rem;

    & .icon {
      cursor: pointer;
    }

    &.name {
      color: #fff;
      width: 15%;

      & div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & .coin-name {
          text-align: right;
        }
      }

      & img {
        max-width: 1rem;
        max-height: auto;
      }
    }

    &.symbol {
      text-transform: uppercase;
    }
  }
`

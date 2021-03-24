import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Tr } from "styled-bootstrap-components"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"

import Coin from "./coin"

const Coinlist = ({ searchCoins }) => {
  const [coins, setCoins] = useState([])
  const [favorites, setFavorites] = useState([])

  const sortCoins = (option) => {
    switch (option) {
      case "name":
        console.log("NAMES")
        coins.sort((a, b) => {
          let coinA = a.name.toLowerCase()
          let coinB = b.name.toLowerCase()
          if (coinA < coinB) return -1
          if (coinA > coinB) return 1
          return 0
        })
    }
  }

  const getCoins = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        console.log(res)
        if (res.data) setCoins(res.data)
        coins.forEach((coin) => (coin.favorited = false))
      })
  }

  useEffect(() => {
    getCoins()
  }, [])
  return (
    <ListWrapper>
      <Table className="coin-table">
        <thead>
          <tr>
            <th scope="col" className="heading"></th>
            <th scope="col" className="heading">
              #
            </th>
            <th scope="col" className="heading coin">
              Coin{" "}
              <span>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  onClick={sortCoins("name")}
                />
              </span>
            </th>
            <th scope="col" className="heading">
              {/* Symbol
              <span>
                <FontAwesomeIcon icon={faSortDown} className="icon" onClick={sortCoins(name)} />
              </span> */}
            </th>
            <th scope="col" className="heading">
              Price
              <span>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  onClick={sortCoins("price")}
                />
              </span>
            </th>
            <th scope="col" className="heading">
              Market Cap
              <span>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  onClick={sortCoins("cap")}
                />
              </span>
            </th>
            <th scope="col" className="heading">
              Circulating Supply
              <span>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="icon"
                  onClick={sortCoins("supply")}
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {coins &&
            coins.map((coin, index) => {
              return (
                <Coin
                  key={coin.id}
                  index={index}
                  coin={coin}
                  coins={coins}
                  onFavoriteCoin={(newCoin) =>
                    setFavorites((favorites) => [...favorites, newCoin])
                  }
                />
              )
            })}
        </tbody>
      </Table>
    </ListWrapper>
  )
}

export default Coinlist

const ListWrapper = styled.div`
  & .coin-table {
    font-family: "Montserrat", sans-serif;
    margin: 0;

    & th.heading {
      background: #343a40;
      color: #9b9b9b;
      border-color: #dc143c;
      border-bottom: 1px solid #dc143c;

      & span {
        margin: 0 0.35rem;

        & .icon {
          color: #000;
          cursor: pointer;
        }
      }

      &.coin {
        text-align: left;
      }
    }
  }
`

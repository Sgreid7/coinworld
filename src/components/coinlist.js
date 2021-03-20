import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Tr } from "styled-bootstrap-components"
import styled from "styled-components"

import Coin from "./coin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"

const Coinlist = () => {
  const [coins, setCoins] = useState([])

  const getCoins = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        console.log(res)
        if (res.data) setCoins(res.data)
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
            <th scope="col" className="heading">
              Coin
            </th>
            <th scope="col" className="heading">
              Symbol
            </th>
            <th scope="col" className="heading">
              Price
            </th>
            <th scope="col" className="heading">
              Market Cap
            </th>
            <th scope="col" className="heading">
              Circulating Supply
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
                  img={coin.image}
                  name={coin.name}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  cap={coin.market_cap}
                  supply={coin.circulating_supply}
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
    }
  }
`

import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Tr } from "styled-bootstrap-components"
import styled from "styled-components"

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
                <tr key={coin.id} className="coin">
                  <th></th>
                  <th>{index + 1}</th>
                  <th>{coin.name}</th>
                  <th className="symbol">{coin.symbol}</th>
                  <th>
                    $
                    {coin.current_price.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </th>
                  <th>{coin.market_cap.toLocaleString()}</th>
                  <th>
                    {coin.circulating_supply.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </th>
                </tr>
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

    & th.heading {
      background: #343a40;
      color: #9b9b9b;
    }

    & tbody {
      & .coin {
        & th {
          color: #9b9b9b;
          font-size: 0.9rem;

          &.symbol {
            text-transform: uppercase;
          }
        }
      }
    }
  }
`

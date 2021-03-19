import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Tr } from "styled-bootstrap-components"
import styled from "styled-components"

const Coinlist = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        // if (res.data) setCoins(res.data)
        console.log(res)
        console.log(coins)
      })
  })
  return (
    <div>
      <Table className="coin-table">
        <thead>
          <tr>
            <th scope="col">Coin</th>
            <th scope="col">Symbol</th>
            <th scope="col">Price</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Coinlist

const ListWrapper = styled.div``

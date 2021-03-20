import React, { useState, useEffect } from "react"
import "./App.css"
import {
  Container,
  Navbar,
  NavbarLink,
  Nav,
  Button,
  Form,
  FormInline,
  FormControl,
} from "styled-bootstrap-components"
import styled from "styled-components"
import "./index.css"

import CoinList from "./components/coinlist"

function App() {
  const [hidden, setHidden] = useState(true)
  return (
    <HomeWrapper className="App">
      <Navbar className="navbar" expandSm dark>
        <Nav>
          <NavbarLink dark brand href="#">
            CoinWorld
          </NavbarLink>
          <Nav>
            <Button
              dark
              outline
              toggleCollapse
              expandSm
              onClick={() => setHidden(!hidden)}
            >
              <span>&#9776;</span>
            </Button>
          </Nav>
        </Nav>
        <Nav collapse expandSm hidden={hidden}>
          <NavbarLink dark>Trending</NavbarLink>
          <NavbarLink dark href="#">
            Exchanges
          </NavbarLink>
          <NavbarLink dark href="#">
            Link
          </NavbarLink>
        </Nav>
        <div>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
      </Navbar>
      <Container>
        <h1>Top 100 Cryptocurrencies Today</h1>
        <CoinList />
      </Container>
    </HomeWrapper>
  )
}

export default App

const HomeWrapper = styled.div`
  background: #252525;
  font-family: "Montserrat", sans-serif;

  & .navbar {
    background: #1c1f21;
  }

  & h1 {
    font-family: "Montserrat", sans-serif;
    color: #eee;
  }
`

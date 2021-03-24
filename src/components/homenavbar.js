import React, { useState, useEffect } from "react"
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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from "styled-components"
import Favorites from "./favorites"

const HomeNavbar = () => {
  const [hidden, setHidden] = useState(true)
  const searchCoins = () => {}

  return (
    <NavWrapper>
      <Navbar className="navbar" expandSm dark>
        <Nav>
          <NavbarLink dark brand href="#">
            <div>
              Coin<span className="brand-letter">W</span>orld
              {/* <img src={Logo} alt="CoinWorld" /> */}
            </div>
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
          <Router>
            <NavbarLink dark href="/trending">
              Trending
            </NavbarLink>
            <NavbarLink dark href="/exchanges">
              Exchanges
            </NavbarLink>
            <NavbarLink dark href="/favorites">
              Favorites
            </NavbarLink>
            <Switch>
              <Route path="/trending"></Route>
              <Route path="/exchanges"></Route>
              <Route path="/favorites" component={Favorites}></Route>
            </Switch>
          </Router>
        </Nav>
        <div>
          <input
            className="form-control me-2 search"
            type="search"
            placeholder="I'm looking for..."
            aria-label="Search"
          />
          <button className="search-btn" type="submit" onClick={searchCoins()}>
            Search
          </button>
        </div>
      </Navbar>
    </NavWrapper>
  )
}

export default HomeNavbar

const NavWrapper = styled.div`
  & .navbar {
    background: #1c1f21;

    & .brand-letter {
      color: #dc143c;
    }

    & img {
      max-width: 5rem;
      max-height: auto;
    }

    & div {
      & .search {
        outline: none;
        padding: 0.25rem;
        margin: 0 0.25rem;
        border: 0.05rem solid #dc143c;
        background: #000;
        color: #fff;
        font-family: "Montserrat", sans-serif;
      }

      & .search-btn {
        cursor: pointer;
        margin: 0 0.25rem;
        padding: 0.25rem 0.5rem;
        background: none;
        outline: none;
        border: 0.05rem solid #dc143c;
        border-radius: 0.05rem;
        font-size: 0.8rem;
        color: #eee;
        transition: 0.4s ease;
        font-family: "Montserrat", sans-serif;

        &:hover {
          background: #dc143c;
        }
      }
    }
  }
`

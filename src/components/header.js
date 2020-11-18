import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = styled.nav`
  width: 100%;
  background: #555;
  opacity: 7;
  color: whitesmoke;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  flow-wrap: wrap;
`;

const UL = styled.ul`
  list-style: none;
  margin-right: 50px;
`;

const LI = styled.li`
  display: inline-block;
  font-size: 15px;
  letter-spacing: 2px;
  text-decoration: none;
  color: whitesmoke;
  opacity: 0.3;
  padding: 0 20px;
`;
export class Header extends Component {
  render() {
    return (
      <Header>
        <UL>
          <LI>
            <Link to="/">Home</Link>
          </LI>
          <LI>
            <Link to="/about">About</Link>
          </LI>
        </UL>
      </Header>
    );
  }
}

export default Header;

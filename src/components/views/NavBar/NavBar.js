import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 3rem 0rem;
  .btn {
    background-color: white;
    border-radius: 50px;
    border: 2px solid #2e7eff;
    color: #2e7eff;
    text-decoration: none;
    padding: 0.7rem 0.5rem;
    width: 6rem;
    font-weight: 700;
  }
  .btn.active,
  .btn:active {
    background-color: #2e7eff;
    color: white;
  }
`;

const NavBar = () => {
  return (
    <NavBarBlock>
      <NavLink exact to="/" className="btn" activeClassName="active">
        단기 예보
      </NavLink>
      <NavLink to="/vilage-fcst" className="btn" activeClassName="active">
        동네 예보
      </NavLink>
    </NavBarBlock>
  );
};

export default NavBar;

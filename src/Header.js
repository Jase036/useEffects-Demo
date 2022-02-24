import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  gap: 16px;
  border-bottom: 2px solid blue;
`;

export default Header;

import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  font-size: 1rem;
  font-weight: 700;
  color: gray;
  margin: 3rem 0rem;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <p>부산광역시 북구 화명동 날씨</p>
    </FooterBlock>
  );
};

export default Footer;

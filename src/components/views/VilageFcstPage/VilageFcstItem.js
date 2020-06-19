import React from "react";
import styled from "styled-components";
import { matchIcon } from "utils/weatherUtils";
import icon from "utils/weatherIcon";

const VilageFcstItemBlock = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 1rem;
  box-shadow: 5px 5px 18px #b8b8b8;
  background-color: white;

  padding: 0.5rem 5rem;
  margin: 1rem;
  p {
    margin: 1;
  }
  .time {
    font-size: 2rem;
    font-weight: 700;
    float: left;
  }
  img {
    margin: 2rem;
  }
  .option {
    font-size: 1.2rem;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1.5rem;
    p {
      font-weight: 700;
    }
    div {
      margin: 0 1rem;
    }
  }
`;

const VilageFcstItem = ({ time, t3h, reh, pop, sky, pty }) => {
  const src = icon[matchIcon(pty, sky)];
  return (
    <VilageFcstItemBlock>
      <p className="time">{time}시</p>
      <img src={src} alt="icon" />
      <div className="option">
        <div>
          <p>기온</p>
          {t3h}°C
        </div>
        <div>
          <p>습도</p>
          {reh}%
        </div>
        <div>
          <p>강수확률</p>
          {pop}%
        </div>
      </div>
    </VilageFcstItemBlock>
  );
};

export default VilageFcstItem;

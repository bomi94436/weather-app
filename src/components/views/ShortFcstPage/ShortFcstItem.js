import React from "react";
import styled from "styled-components";
import { matchIcon } from "utils/weatherUtils";
import { getPrecipitation } from "utils/weatherUtils";
import icon from "utils/weatherIcon";

const ShortFcstItemBlock = styled.div`
  width: 13rem;
  border-radius: 1rem;
  padding: 2rem 0.5rem;
  box-shadow: 5px 5px 18px #b8b8b8;
  background-color: white;
  margin: 3rem 1rem;
  .time {
    font-size: 2rem;
  }
  p {
    margin: 0 auto;
  }
  img {
    margin: 2rem 0rem;
  }
  .option {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    p {
      font-weight: 700;
    }
  }
`;

const ShortFcstItem = ({ time, date, t1h, reh, rn1, sky, pty }) => {
  time = Number(time) ? Number(time) - 1 : 23;
  const src = icon[matchIcon(pty, sky)];
  return (
    <ShortFcstItemBlock>
      <p>
        {date.substr(0, 2)}월 {date.substr(2, 2)}일
      </p>
      <p className="time">{time}시</p>
      <img src={src} alt="icon" />
      <div className="option">
        <div>
          <p>기온</p>
          {t1h}°C
        </div>
        <div>
          <p>습도</p>
          {reh}%
        </div>
        <div>
          <p>강수량</p>
          {getPrecipitation(rn1)}
        </div>
      </div>
    </ShortFcstItemBlock>
  );
};

export default ShortFcstItem;

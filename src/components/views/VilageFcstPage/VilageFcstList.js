import React from "react";
import { matchTimeDateAndCategory } from "utils/weatherUtils";
import VilageFcstItem from "./VilageFcstItem";
import styled from "styled-components";

const VilageFcstListBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const VilageFcstList = ({ match, fcstField, item }) => {
  const fcstDate = match.params.date;
  const fcstTime = fcstField.filter((date) => {
    return fcstDate === date.fcstDate;
  });

  return (
    <VilageFcstListBlock>
      {fcstTime.map(({ fcstTime }) => {
        // 예보 시간
        const time = fcstTime;
        // 3시간 기온
        const t3h = matchTimeDateAndCategory(item, fcstTime, fcstDate, "T3H");
        // 습도
        const reh = matchTimeDateAndCategory(item, fcstTime, fcstDate, "REH");
        // 강수 확률
        const pop = matchTimeDateAndCategory(item, fcstTime, fcstDate, "POP");
        // 하늘 상태
        const sky = matchTimeDateAndCategory(item, fcstTime, fcstDate, "SKY");
        // 강수 형태
        const pty = matchTimeDateAndCategory(item, fcstTime, fcstDate, "PTY");

        return (
          <VilageFcstItem
            key={time}
            time={time.substr(0, 2)}
            t3h={t3h}
            reh={reh}
            pop={pop}
            sky={sky}
            pty={pty}
          />
        );
      })}
    </VilageFcstListBlock>
  );
};

export default VilageFcstList;

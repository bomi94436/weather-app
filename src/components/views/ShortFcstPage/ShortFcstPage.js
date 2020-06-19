import React from "react";
import axios from "axios";
import getWetherURL, { shortFcst } from "utils/wetherURL";
import { getFormatDate, getShortFcstTime } from "utils/formatDateTime";
import {
  getShortFcstTimeField,
  matchTimeAndCategory,
} from "utils/weatherUtils";
import usePromise from "utils/usePromise";
import ShortFcstItem from "./ShortFcstItem";
import styled from "styled-components";

const ShortFcstPageBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-evenly;
`;

const ShortFcstPage = () => {
  let item = {};
  let fcstTime = [];
  const [loading, response, error] = usePromise(() => {
    return axios.get(
      getWetherURL(
        shortFcst,
        "100",
        "1",
        getFormatDate(new Date()),
        getShortFcstTime(new Date()),
        "97",
        "77"
      ),
      (req, res) =>
        req.setHeader("Content-Security-Policy", "upgrade-insecure-requests")
    );
  }, []);

  if (loading) {
    return <div>로딩중 . . .</div>;
  }
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  if (!response) {
    return null;
  }

  item = response.data.response.body.items.item;
  fcstTime = getShortFcstTimeField(item);

  return (
    <ShortFcstPageBlock>
      {fcstTime.map((time) => {
        // 예보 날짜
        const date = item.find((element) => element.fcstTime === time).fcstDate;
        // 기온
        const t1h = matchTimeAndCategory(item, time, "T1H");
        // 습도
        const reh = matchTimeAndCategory(item, time, "REH");
        // 1시간 강수량
        const rn1 = matchTimeAndCategory(item, time, "RN1");
        // 하늘 상태
        const sky = matchTimeAndCategory(item, time, "SKY");
        // 강수 형태
        const pty = matchTimeAndCategory(item, time, "PTY");

        return (
          <ShortFcstItem
            key={time}
            time={time.substr(0, 2)}
            date={date.substr(4, 4)}
            t1h={t1h}
            reh={reh}
            rn1={rn1}
            sky={sky}
            pty={pty}
          />
        );
      })}
    </ShortFcstPageBlock>
  );
};

export default ShortFcstPage;

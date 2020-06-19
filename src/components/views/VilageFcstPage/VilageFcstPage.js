import React from "react";
import axios from "axios";
import getWetherURL, { vilageFcst } from "utils/wetherURL";
import { getFormatDate, getVilageFcstTime } from "utils/formatDateTime";
import { getVilageFcstField, getVilageFcstPageDate } from "utils/weatherUtils";
import usePromise from "utils/usePromise";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import VilageFcstList from "./VilageFcstList";

const VilageFcstNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 30rem;
  font-weight: 700;
  margin-bottom: 3rem;

  .link {
    text-decoration: none;
    color: black;
    &.active {
      color: #2e7eff;
    }
  }
`;

const VilageFcstPage = () => {
  const fcstTime = [];
  const [loading, response, error] = usePromise(() => {
    return axios.get(
      getWetherURL(
        vilageFcst,
        "200",
        "1",
        getFormatDate(new Date()),
        getVilageFcstTime(new Date()),
        "97",
        "77"
      )
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

  const item = response.data.response.body.items.item;

  const fcstField = getVilageFcstField(item);

  const pageDate = getVilageFcstPageDate(fcstField);

  return (
    <div>
      <VilageFcstNavBar>
        {pageDate.map((date) => {
          return (
            <Link
              to={"/vilage-fcst/" + date}
              key={date}
              className="link active"
            >
              {date.substr(4, 2)}월 {date.substr(6, 2)}일
            </Link>
          );
        })}
      </VilageFcstNavBar>
      <Route
        path="/vilage-fcst/:date"
        component={({ match }) => (
          <VilageFcstList fcstField={fcstField} match={match} item={item} />
        )}
      />
    </div>
  );
};

export default VilageFcstPage;

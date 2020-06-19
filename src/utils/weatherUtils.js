// 단기 예보 시간 필드
export const getShortFcstTimeField = (item) => {
  let fcstTime = item.map((e) => e.fcstTime);
  fcstTime = [...new Set(fcstTime)];
  if (new Date().getMinutes() < 30) {
    fcstTime.shift();
  }
  return fcstTime;
};

// 동네 예보 시간, 날짜 필드
export const getVilageFcstField = (item) => {
  let fcstField = item.map(({ fcstTime, fcstDate }) => ({
    fcstTime,
    fcstDate,
  }));

  fcstField = fcstField.filter(function (a) {
    var key = Object.keys(a)
      .map(function (k) {
        return a[k];
      })
      .join("|");
    if (!this[key]) {
      return (this[key] = true);
    }
  }, Object.create(null));

  return fcstField;
};

// 동네 예보에서 페이징 할 날짜
export const getVilageFcstPageDate = (item) => {
  let fcstDate = item.map((e) => e.fcstDate);
  fcstDate = [...new Set(fcstDate)];
  return fcstDate;
};

// response에서 해당 시간의 카테고리 값
export const matchTimeAndCategory = (item, time, category) => {
  return item.find(
    (element) => element.fcstTime === time && element.category === category
  ).fcstValue;
};

export const matchTimeDateAndCategory = (item, time, date, category) => {
  return item.find(
    (element) =>
      element.fcstTime === time &&
      element.fcstDate === date &&
      element.category === category
  ).fcstValue;
};

// 강수형태(PTY)와 하늘 상태(SKY)를 합친 날씨 상태값
export const matchIcon = (pty, sky) => {
  switch (pty) {
    case "0":
      switch (sky) {
        case "1":
          return "sunny";
        case "3":
          return "cloudy";
        case "4":
          return "blur";
        default:
          return "unknown";
      }
    case "1":
      return "rainy";
    case "2":
      return "sleet";
    case "3":
      return "snow";
    case "4":
      return "shower";
    default:
      return "unknown";
  }
};

// (1시간) 강수량
export const getPrecipitation = (rn1) => {
  if (rn1 === 0) {
    return "0mm";
  } else if (rn1 < 1) {
    return "0~1mm";
  } else if (rn1 < 5) {
    return "1~4mm";
  } else if (rn1 < 10) {
    return "5~9mm";
  } else if (rn1 < 20) {
    return "10~19mm";
  } else if (rn1 < 40) {
    return "20~39mm";
  } else if (rn1 < 70) {
    return "40~69mm";
  } else {
    return "70mm~";
  }
};

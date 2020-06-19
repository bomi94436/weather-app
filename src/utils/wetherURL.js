export const shortNcst = "getUltraSrtNcst"; // 초단기실황조회
export const shortFcst = "getUltraSrtFcst"; // 초단기예보조회
export const vilageFcst = "getVilageFcst"; // 동네예보조회

const key =
  "u%2FIOb5aDaOO7kHZB1raxzol%2Fcgb8GXAl%2FuDhRTLi6Sq8EXweb8fGwDdN1Pep8DzWSn4gMvpxr4wR7zUbCFDf8w%3D%3D";

const getWetherURL = (
  getapi,
  numOfRows,
  pageNo,
  base_date,
  base_time,
  nx,
  ny
) => {
  return `http://apis.data.go.kr/1360000/VilageFcstInfoService/${getapi}?serviceKey=${key}&dataType=JSON&numOfRows=${numOfRows}&pageNo=${pageNo}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;
};

export default getWetherURL;

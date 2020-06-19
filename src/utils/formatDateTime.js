export function getFormatDate(date) {
  let hh = date.getHours();
  let mm = date.getMinutes();
  if (mm < 30 && !hh) {
    date.setDate(date.getDate() - 1);
  }

  let yyyy = date.getFullYear().toString();
  let MM = (date.getMonth() + 1).toString();
  let dd = date.getDate().toString();

  return yyyy + (MM[1] ? MM : "0" + MM[0]) + (dd[1] ? dd : "0" + dd[0]);
}

export function getShortFcstTime(date) {
  let mm = date.getMinutes();
  if (mm < 30) {
    date.setHours(date.getHours() - 1);
    mm = 59;
  }
  let hh = date.getHours();
  hh = hh.toString();
  mm = mm.toString();
  let ss = date.getSeconds().toString();
  return (
    (hh[1] ? hh : "0" + hh[0]) +
    // ":" +
    (mm[1] ? mm : "0" + mm[0])
    // + ":" +
    // (ss[1] ? ss : "0" + ss[0])
  );
}

export function getVilageFcstTime(date) {
  let mm = date.getMinutes();
  if (mm < 10) {
    date.setHours(date.getHours() - 1);
  }
  let hh = date.getHours();
  if (hh === 23 || hh < 2) {
    return "2300";
  } else if (hh < 5) {
    return "0200";
  } else if (hh < 8) {
    return "0500";
  } else if (hh < 11) {
    return "0800";
  } else if (hh < 14) {
    return "1100";
  } else if (hh < 17) {
    return "1400";
  } else if (hh < 20) {
    return "1700";
  } else {
    return "2000";
  }
}

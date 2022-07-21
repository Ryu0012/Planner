const yearMonth = document.querySelector("#status-bar span");

const dateSun = document.querySelector(
  ".date-details:nth-child(1) span:last-child"
);
const dateMon = document.querySelector(
  ".date-details:nth-child(2) span:last-child"
);
const dateTue = document.querySelector(
  ".date-details:nth-child(3) span:last-child"
);
const dateWed = document.querySelector(
  ".date-details:nth-child(4) span:last-child"
);
const dateThu = document.querySelector(
  ".date-details:nth-child(5) span:last-child"
);
const dateFri = document.querySelector(
  ".date-details:nth-child(6) span:last-child"
);
const dateSat = document.querySelector(
  ".date-details:nth-child(7) span:last-child"
);

const TODAYCLASSNAME = "today";

function twoPadEnd(num) {
  return String(num).padStart(2, "0");
}

function getYearMonth(date) {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  yearMonth.innerText = `${year}년 ${month}월`;
}

function getDaysDay(days, day) {
  // const days = date.getDate();
  // const day = date.getDay();

  if (day === 0) {
    dateSun.innerText = days;
    dateMon.innerText = twoPadEnd(days + 1);
    dateTue.innerText = twoPadEnd(days + 2);
    dateWed.innerText = twoPadEnd(days + 3);
    dateThu.innerText = twoPadEnd(days + 4);
    dateFri.innerText = twoPadEnd(days + 5);
    dateSat.innerText = twoPadEnd(days + 6);
  } else if (day === 1) {
    dateSun.innerText = twoPadEnd(days - 1);
    dateMon.innerText = days;
    dateTue.innerText = twoPadEnd(days + 1);
    dateWed.innerText = twoPadEnd(days + 2);
    dateThu.innerText = twoPadEnd(days + 3);
    dateFri.innerText = twoPadEnd(days + 4);
    dateSat.innerText = twoPadEnd(days + 5);
  } else if (day === 2) {
    dateSun.innerText = twoPadEnd(days - 2);
    dateMon.innerText = twoPadEnd(days - 1);
    dateTue.innerText = days;
    dateWed.innerText = twoPadEnd(days + 1);
    dateThu.innerText = twoPadEnd(days + 2);
    dateFri.innerText = twoPadEnd(days + 3);
    dateSat.innerText = twoPadEnd(days + 4);
  } else if (day === 3) {
    dateSun.innerText = twoPadEnd(days - 3);
    dateMon.innerText = twoPadEnd(days - 2);
    dateTue.innerText = twoPadEnd(days - 1);
    dateWed.innerText = days;
    dateThu.innerText = twoPadEnd(days + 1);
    dateFri.innerText = twoPadEnd(days + 2);
    dateSat.innerText = twoPadEnd(days + 3);
  } else if (day === 4) {
    dateSun.innerText = twoPadEnd(days - 4);
    dateMon.innerText = twoPadEnd(days - 3);
    dateTue.innerText = twoPadEnd(days - 2);
    dateWed.innerText = twoPadEnd(days - 1);
    dateThu.innerText = days;
    dateFri.innerText = twoPadEnd(days + 1);
    dateSat.innerText = twoPadEnd(days + 2);
  } else if (day === 5) {
    dateSun.innerText = twoPadEnd(days - 5);
    dateMon.innerText = twoPadEnd(days - 4);
    dateTue.innerText = twoPadEnd(days - 3);
    dateWed.innerText = twoPadEnd(days - 2);
    dateThu.innerText = twoPadEnd(days - 1);
    dateFri.innerText = days;
    dateSat.innerText = twoPadEnd(days + 1);
  } else if (day === 6) {
    dateSun.innerText = twoPadEnd(days - 6);
    dateMon.innerText = twoPadEnd(days - 5);
    dateTue.innerText = twoPadEnd(days - 4);
    dateWed.innerText = twoPadEnd(days - 3);
    dateThu.innerText = twoPadEnd(days - 2);
    dateFri.innerText = twoPadEnd(days - 1);
    dateSat.innerText = days;
  }
}

function getTodayColor(day) {
  const sun = document.querySelector(".date-details:nth-child(1)");
  const mon = document.querySelector(".date-details:nth-child(2)");
  const tue = document.querySelector(".date-details:nth-child(3)");
  const wed = document.querySelector(".date-details:nth-child(4)");
  const thu = document.querySelector(".date-details:nth-child(5)");
  const fri = document.querySelector(".date-details:nth-child(6)");
  const sat = document.querySelector(".date-details:nth-child(7)");

  if (day === 0) {
    sun.classList.add(TODAYCLASSNAME);
    sat.classList.remove(TODAYCLASSNAME);
  } else if (day === 1) {
    mon.classList.add(TODAYCLASSNAME);
    sun.classList.remove(TODAYCLASSNAME);
  } else if (day === 2) {
    tue.classList.add(TODAYCLASSNAME);
    mon.classList.remove(TODAYCLASSNAME);
  } else if (day === 3) {
    wed.classList.add(TODAYCLASSNAME);
    tue.classList.remove(TODAYCLASSNAME);
  } else if (day === 4) {
    thu.classList.add(TODAYCLASSNAME);
    wed.classList.remove(TODAYCLASSNAME);
  } else if (day === 5) {
    fri.parentElement.classList.add(TODAYCLASSNAME);
    thu.parentElement.classList.remove(TODAYCLASSNAME);
  } else if (day === 6) {
    sat.classList.add(TODAYCLASSNAME);
    fri.classList.remove(TODAYCLASSNAME);
  }
}

function getClock() {
  const date = new Date();
  const days = date.getDate();
  const day = date.getDay();

  getYearMonth(date);
  getDaysDay(days, day);
  getTodayColor(day);
}

getClock();
setInterval(getClock, 24 * 60 * 60 * 1000);

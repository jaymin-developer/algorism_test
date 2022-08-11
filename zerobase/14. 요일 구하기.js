function solution(date) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );

  let day = new Date(date);

  console.log(week[day.getDay()]);
}

solution("2021-01-27");
solution("2021-02-27");
solution("2021-03-14");

function solution(year) {
  let result = "";
  if (year % 400 === 0) {
    result = true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    result = true;
  } else {
    result = false;
  }

  console.log(result);
}

solution(4);
solution(100);
solution(124);
solution(247);
solution(400);

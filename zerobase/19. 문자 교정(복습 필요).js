// 앞 글자 대문자.

function solution(str) {
  let fixStr = "";
  let array = str.split(" ");

  for (let el of array) {
    fixStr += el[0].toUpperCase() + el.slice(1) + " ";
  }

  console.log(fixStr);
}

solution("Hello, My name is john");
solution("This week is closed due to COVID-19");
solution("fifty percent off this week");

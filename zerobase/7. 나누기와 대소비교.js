// 4개 수를 입력 받아 나누기 연산을 통해 대소를 판단하는 함수 제작.

function solution(a, b, c, d) {
  let result = "";
  let firstValue = a / b;
  let secondValue = c / d;

  if (firstValue > secondValue) {
    result = "1";
  } else if (firstValue < secondValue) {
    result = "-1";
  } else {
    result = 0;
  }
  console.log(result);
}

solution(14, 2, 6, 6);
solution(6, 7, 8, 9);
solution(18, 2, 36, 4);

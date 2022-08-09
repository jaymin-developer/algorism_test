// 두 수 사이의 숫자들을 출력하는 함수를 작성하시오.
// 입력은 두 숫자 값이 주어지며, 입력된 숫자를 포함한 두 수 사이의 자연수를 배열로 반환한다.

function solution(num1, num2) {
  let result = [];
  let lowerNum;
  let higherNum;

  lowerNum = num1 > num2 ? num2 : num1;
  higherNum = num1 > num2 ? num1 : num2;

  for (let i = lowerNum; i <= higherNum; i++) {
    result.push(i);
  }
  console.log(result);
}

solution(3, 7);
solution(8, 3);
solution(12, 10);

// 강의 답안
function solution2(x, y) {
  let result = [];
  if (x > y) {
    [x, y] = [y, x];
  }

  for (let i = x; i <= y; i++) {
    result.push(i);
  }

  console.log(result);
}

solution(3, 7);
solution(8, 3);
solution(12, 10);

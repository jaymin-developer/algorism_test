// 두 수 x,y를 입력 받아 x의 y 제곱 값을 반환해주는 함수를 구현하시오.
// 제곱 연산자를 사용하지 않는다.

function solution(x, y) {
  console.log(x ** y);
}

solution(2, 3);
solution(4, 6);
solution(1, 100);

function solution2(x, y) {
  let result = Math.pow(x, y);
  console.log(result);
}

solution2(2, 3);
solution2(4, 6);
solution2(1, 100);

function solution3(x, y) {
  let result = 1;
  for (let i = 1; i <= y; i++) {
    result *= x;
  }
  console.log(result);
}

solution3(2, 3);
solution3(4, 6);
solution3(1, 100);

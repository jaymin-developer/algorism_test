// 자연수를 입력 받아 해당 수만큼 별을 찍는 문자열 반환 함수를 작성하시오.
// 입력값 5 / 7 / 12

function solution(value) {
  let result = "";

  for (let i = 0; i < value; i++) {
    result += "*";
  }

  console.log(result);
}

solution(5);
solution(7);
solution(12);

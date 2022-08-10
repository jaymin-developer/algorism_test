// 두 정수를 입력 받아 문자열 형태의 대소비교 부등호를 반환하는 함수를 작성하시오.

function solution(x, y) {
  let result = "";

  if (x > y) {
    result = ">";
  } else if (x < y) {
    result = "<";
  } else {
    result = "=";
  }

  console.log(result);
}

solution(3, 5);
solution(7, 4);
solution(2, 2);

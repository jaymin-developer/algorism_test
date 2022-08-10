// ATM 5만원 지폐밖에 사용하지 않아 5배수 금액만 취급
// 인출 시 5천원 수수료 필요.
// 인출 금액과 계좌 총 금액 입력 받아 계좌 남은 금액 함수 작성

function solution(x, y) {
  let result = 0;

  if (x % 5 !== 0) {
    result = y;
  } else if (y > x) {
    result = y - x - 0.5;
  } else {
    result = y;
  }

  console.log(result);
}

solution(40, 130.0);
solution(33, 130.0);
solution(300, 300.0);

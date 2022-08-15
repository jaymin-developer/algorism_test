// 입력된 값을 통해서 등차 수열의 몇 번째 항인지를 구하는 프로그램을 작성하시오.

function solution(a, d, n) {
  let index = -1;

  let num;
  for (let i = 1; ; i++) {
    num = a + d * (i - 1);

    if (num > n) break;

    if (num === n) {
      index = i;
    }
  }

  console.log(index);
}

solution(1, 2, 7);
solution(2, 3, 10);
solution(3, 5, 23);

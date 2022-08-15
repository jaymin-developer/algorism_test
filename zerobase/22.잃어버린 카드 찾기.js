// 등차 수열을 이루는 4개의 숫자 카드, 한 카드 잃어버림.
function solution(a, b, c) {
  let number = 0;
  let num = [a, b, c];
  num.sort((x, y) => x - y);

  let 공차 = Math.min(num[1] - num[0], num[2] - num[1]);

  for (let i = 0; ; i++) {
    if (num.includes(num[0] + 공차 * i)) {
      continue;
    } else {
      number = num[0] + 공차 * i;
      break;
    }
  }

  console.log(number);
}

solution(1, 7, 10);
solution(3, 8, 18);
solution(11, 2, 5);

function solution(a, b, c) {
  let number = 0;

  let num = [a, b, c];
  num.sort((x, y) => x - y);

  // 1. get d => 등차값 찾기
  let d = 0;
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;

  // 2. 빈 index 찾기
  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

  // 3. 이전 값 + d
  number = num[0] + d * index;

  console.log(number);
}

solution(1, 7, 10);
solution(3, 8, 18);
solution(11, 2, 5);

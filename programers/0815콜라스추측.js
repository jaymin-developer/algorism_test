// While문 num이 1 아니고 answer이 500 아니면 실행
function solution(num) {
  let answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}

// for문
function solution(num) {
  let count = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return count;
    }
    count++;

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return -1;
}

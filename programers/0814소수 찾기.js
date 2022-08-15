// https://namu.wiki/w/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98%20%EC%B2%B4
// 에라토스테네스의 체 개념 필요. 제곱근까지만 나눠보면 안다.

const solution = (n) => {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        console.log(i, j);
        isPrime = false;
        break;
      }
    }
    isPrime && answer++;
  }
  return answer;
};

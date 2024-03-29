// 최대공약수, 최소공배수
// 큰 수 A를 작은 수 B로 나누어 떨어지면, A, B의 최대공약수 B
// A를 B로 나누었을 때 나머지가 R이면, A, B의 최대공약수는 R과 B의 최대공약수와 같다.

function solution(n, m) {
  let a = m; // 큰 수가 들어온다.
  let b = n; // 작은 수가 들어온다.
  let r = 0; // a를 b로 나눴을 때의 나머지 값

  while (a % b > 0) {
    r = a % b;
    a = b; // 큰 수에 작은 수를 할당
    b = r; // 작은 수에는 나머지 값 할당
  }

  //     최소공배수 : n과 m을 곱한 값에 최대공약수를 나누면 최소공배수
  return [b, (n * m) / b];
}

solution(3, 12);
solution(2, 5);

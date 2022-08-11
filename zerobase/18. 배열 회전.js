// 배열 순서를 역으로 reverse 사용 X

function solution(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  console.log(result);
}

solution([1, 2, 3, 4]);
solution([-1, 6, "hello", -15]);
solution(["apple", "banana", "mango"]);

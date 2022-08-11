// 2차원 배열 모든 요소 곱한 값

function solution(arr) {
  let sum = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum *= arr[i][j];
    }
  }
  console.log(sum);
}

solution([[1], [2], [3]]);
solution([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
solution([
  [5, 1],
  [0.2, 4, 0.5],
  [3, 9],
]);

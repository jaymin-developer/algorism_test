// 고객이 평행한 직사각형을 만들기 위해 세 점을 선택한 후 네번째 점을 구하는 함수

function solution(array) {
  let result = [];

  if (array[0][0] === array[0][1]) {
    result.push(array[0][2]);
  } else if (array[0][0] == array[0][2]) {
    result.push(array[0][1]);
  } else if (array[0][1] === array[0][2]) {
    result.push(array[0][0]);
  }

  if (array[1][0] === array[1][1]) {
    result.push(array[1][2]);
  } else if (array[1][0] == array[1][2]) {
    result.push(array[1][1]);
  } else if (array[1][1] === array[1][2]) {
    result.push(array[1][0]);
  }

  console.log(result);
}

solution([
  [5, 5, 8],
  [5, 8, 5],
]);
solution([
  [3, 1, 1],
  [2, 1, 2],
]);
solution([
  [7, 7, 3],
  [4, 1, 1],
]);

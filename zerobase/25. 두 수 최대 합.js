function solution(arr) {
  let result = [];

  arr = arr.sort((a, b) => {
    return b - a;
  });

  result.push(arr[0], arr[1]);
  console.log(result);
}

solution([-11, 5, 18, -2, -3, 6, 4, 17, 10, 9]);
solution([3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19]);
solution([
  -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
  14,
]);

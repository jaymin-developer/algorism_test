function solution(array) {
  let max = 0;
  let order = 0;

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
      order = i + 1;
    }
  }
  console.log(order);
}

solution([3, 7, 9, 6, 1]);
solution([2, 7, 1, 4, 3, 0, 5]);
solution([7, 5, 0, 1, 2, 12, 6]);

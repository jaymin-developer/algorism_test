// Math객체 이용 안하고

function solution(arr) {
  console.log(Math.max(...arr));
}

solution([1, 6, 5, 2, 3]);
solution([19, 41, 23, -4, 17]);
solution([-64, -27, -41, -33, -59]);

function solution2(arr) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}

solution2([1, 6, 5, 2, 3]);
solution2([19, 41, 23, -4, 17]);
solution2([-64, -27, -41, -33, -59]);

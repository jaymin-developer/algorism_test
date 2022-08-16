// 일곱 난쟁이 합 100, 두 명이 가짜행세

function solution(arr) {
  let result = [];

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  sum -= 100;

  let faker = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum === arr[i] + arr[j]) {
        faker[0] = i;
        faker[1] = j;
        break;
      }
    }
    console.log(faker);
    if (faker.length !== 0) break;
  }

  for (let i = 0; i < arr.length; i++) {
    if (faker[0] !== i && faker[1] !== i) {
      result.push(arr[i]);
    }
  }

  console.log(result);
}

solution([1, 5, 6, 7, 10, 12, 19, 29, 33]);

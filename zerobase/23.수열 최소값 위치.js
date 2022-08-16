// 수열이 주어질 때, 이 수열의 있는 수 중 최솟값의 위치 모두 출력하는 프로그램.

function solution(arr) {
  let answer = [];
  let minNum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    minNum = minNum > arr[i] ? arr[i] : minNum;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] === minNum && answer.push(i);
  }

  console.log(answer);
}

solution([5, 2, 10, 2]);
solution([4, 5, 7, 4, 8]);
solution([12, 11, 11, 16, 11, 12]);

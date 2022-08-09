function solution(x, y) {
  let resultArr = [x, y];
  let result = 0;

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] >= resultArr[i + 1]) {
      result = resultArr[i] - resultArr[i + 1];
      resultArr.push(result);
    }
  }

  console.log(resultArr);
}

solution(9, 3);
solution(6, 3);
solution(13, 7);

// 강의 답안
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  let sum;
  while (1) {
    sum = s - e;
    s = e;
    e = sum;

    if (e < 0) break;

    sequence.push(e);
  }

  console.log(sequence);
}

answer(9, 3);
answer(6, 3);
answer(13, 7);

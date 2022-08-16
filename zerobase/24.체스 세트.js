// 기물 별 개수가 많거나 부족함. king부터 pawns 순으로 들어옴
// 킹 1, 퀸1, 룩2, 비숍2, 나이트2, 폰8

function solution(arr) {
  let result = [];
  let requiredList = [1, 1, 2, 2, 2, 8];

  for (let i = 0; i < arr.length; i++) {
    result.push(requiredList[i] - arr[i]);
  }

  console.log(result);
}

solution([0, 1, 2, 2, 2, 7]);
solution([2, 1, 2, 1, 2, 1]);
solution([0, 1, 1, 5, 3, 6]);

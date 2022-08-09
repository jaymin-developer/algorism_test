// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

// for문
function solution(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count = count + arr[i];
  }

  return count / arr.length;
}

// reduce
function solution(arr) {
  return (
    arr.reduce((el, cu) => {
      return el + cu;
    }) / arr.length
  );
  // 총합에서 배열의 길이 만큼 나눠주면 평균값
}

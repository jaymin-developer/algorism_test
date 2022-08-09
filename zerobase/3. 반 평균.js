//

function solution(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let average = (sum / array.length).toFixed(2);
  console.log(average);
}

solution([80, 95, 65, 70, 100]);
solution([82, 77, 51, 64, 73, 90, 80]);
solution([100, 71, 59, 88, 72, 75, 91, 93]);

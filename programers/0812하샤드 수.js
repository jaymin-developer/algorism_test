function solution(x) {
  let result = false;
  let sum = 0;

  x = String(x);

  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }

  if (x % sum === 0) {
    result = true;
  }

  return result;
}

// reduce
function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc / 1 + cur / 1;
    });
  return x % answer === 0 ? true : false;
}

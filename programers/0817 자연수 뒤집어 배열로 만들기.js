function solution(n) {
  const answer = n
    .toString()
    .split("")
    .map((el) => {
      return Number(el);
    })
    .reverse();
  return answer;
}

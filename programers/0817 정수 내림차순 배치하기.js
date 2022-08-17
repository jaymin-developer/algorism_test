function solution(n) {
  let answer = 0;
  let list = n.split("");
  let listDesc = list.sort((a, b) => b - a);

  answer = listDesc.join();

  return answer;
}

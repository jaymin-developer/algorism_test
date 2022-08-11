// 중복 단어 제거

function solution(array) {
  let result = new Set(array);
  result = Array.from(result);

  console.log(result);
}

solution(["john", "alice", "alice"]);
solution(["Hello", "hello", "HELLO", "hello"]);
solution(["kiwi", "banana", "mango", "kiwi", "banana"]);

// 강의

function solution2(array) {
  let new_arr = [];
  new Set(array).forEach(function (item) {
    new_arr.push(item);
  });

  console.log(result);
}

solution(["john", "alice", "alice"]);
solution(["Hello", "hello", "HELLO", "hello"]);
solution(["kiwi", "banana", "mango", "kiwi", "banana"]);

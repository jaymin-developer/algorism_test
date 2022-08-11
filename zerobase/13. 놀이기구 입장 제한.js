// 150cm 이상 탑승 가능

function solution(object) {
  console.log(object.height >= 150 ? true : false);
}

solution({ name: "john", age: 27, height: 181 });
solution({ name: "alice", age: 12, height: 148 });
solution({ name: "bob", age: 14, height: 156 });

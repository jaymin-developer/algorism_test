//Advert로 시작하는 메일 제목은 스팸 처리

function solution(str) {
  console.log(String(str).toLowerCase().includes("advert"));
}

solution("RE:Request documents");
solution("[Advertisement] free mobile!");
solution("50% off this week (advertising)");

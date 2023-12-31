let rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//랜덤숫자 생성 (재귀함수 사용)
function randomNum(array) {
  if (!array) {
    array = [];
  }

  let n = Math.floor(Math.random() * 9) + 1;

  if (array.length < 3 && array.indexOf(n) < 0) {
    array.push(n);
    return randomNum(array);
  } else if (array.length < 3) {
    return randomNum(array);
  } else {
    return array;
  }
}

// 함수실행, 게임시작 알림
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰 보세요!");
answer = randomNum();
console.log(answer);

// 실행횟수 카운트
let count = 1;
console.log(`${count}번째 시도 : `)

rl.on("line", (num) => {
  arrNum = [...num];
  let s = 0,
    b = 0;

  arrNum.forEach(function (a, idx) {
    if (answer[idx] == a) {
      s++;
    } else if (answer.includes(parseInt(a))) {
      b++;
    }
  });

  console.log(`${b}B ${s}S`);

  if (s === 3) {
    rl.close();
    console.log(`${count}번만에 맞히셨습니다.`);
    console.log("게임을 종료합니다.");
  } else {
    count++;
    console.log(`${count}번째 시도 : `);
  }
})
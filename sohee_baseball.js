/* 

💡 **To do : 과제 조건**
- 조건문, 반복문을 활용
- 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759
- 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
- 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
    - 숫자의 값과 위치가 모두 일치하면 S
    - 숫자의 값은 일치하지만 위치가 틀렸으면 B
- 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
- 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.

💡 진행 방식
 */

// 컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!
// 1번째 시도 : 134
// 0B0S
// 2번째 시도 : 238
// 1B1S
// 3번째 시도 : 820
// 2B1S
// 4번째 시도 : 028
// 3B
// 5번째 시도 : 280
// 3S
// 4번만에 맞히셨습니다. 
// 게임을 종료합니다.
// ```


// let answer = ''
// while 
// ->이미 문자열처럼 빈문자열 선언했네ㅋㅋ
//숫자 자릿수를 문자열처럼다룰까?(3자리니까)

//3자리로 범위 지정? answer = lenght.3
//첫번째숫자를 랜덤하게 만든다. 

//두번째 숫자를 랜덤하게 만든다. 
//if 만약 같으면 루프로 돌아서 될때까지

//세번째 숫자를 랜덤하게 생성
//if 1이나 2자리와 같으면
// 루프로 돌아서 새로운 난수를 만든다.

//const readline = require('readline');


// const readline = require("redaline");

// const rl = readline.createInterface({
// 	input: process.stdin,
//   output: process.stdout
// });

// // 4 5 6 7 8 9 10
// let input;
// rl.on("line", (line) => {
//   input = line.split(' ').map((data) => { return parseInt(data) });
//   rl.close();
// });

// rl.on("close", () => {
//   // 입력된 값으로 원하는 로직 수행!
//   console.log(input); // [4, 5, 6, 7, 8, 9, 10]
  
//   // 프로그램 종료
//   process.exit();
// })

// function generateRandomCode() {
//     let str = ''
//     for (let i = 0; i < 3; i++) {
//       str += Math.floor(Math.random() * 10)
//     }
//     return str;
//   }
//   generateRandomCode();



//   function generateRandomCode() {
//     let str = '';
//     const generatedCodes = [];
  
//     while (generatedCodes.length < 3) {
//       const digit = Math.floor(Math.random() * 10).toString();

//       if (!generatedCodes.includes(digit)) { //숫자가 같지 않으면 추가.
//         generatedCodes.push(digit);
//         str += digit;
//       }
//     }
  
//     return str; 
//   }
  
//   generateRandomCode();


//   const readline = require('readline');

// function generateRandomCode() {
//   let str = '';
//   const generatedCodes = [];

//   while (generatedCodes.length < 3) {
//     const digit = Math.floor(Math.random() * 9).toString();
//     if (!generatedCodes.includes(digit)) {
//       generatedCodes.push(digit);
//       str += digit;
//     }
//   }

//   return str;
// }

// function playBaseballGame() {
//   const computerCode = generateRandomCode();
//   let attempts = 0;

//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.setPrompt("세 자리 숫자를 입력하세요. > ");
//   rl.prompt();

//   rl.on('line', (userCode) => {
//     attempts++;

//     if (userCode === computerCode) {
//       console.log(`축하합니다! ${attempts}번의 시도 끝에 숫자를 맞추셨습니다.`);
//       rl.close();
//     } else {
//       let strikes = 0;
//       let balls = 0;

//       for (let i = 0; i < 3; i++) {
//         const computerDigit = computerCode[i];
//         const userDigit = userCode[i];

//         if (computerDigit === userDigit) {
//           strikes++;
//         } else if (computerCode.includes(userDigit)) {
//           balls++;
//         }
//       }

//       console.log(`Strike: ${strikes}, Ball: ${balls}`);
//       rl.prompt();
//     }
//   });

//   rl.on('close', () => {
//     console.log("게임이 종료되었습니다.");
//   });
// }

// playBaseballGame();



const readline = require('readline');

//중복없이 세자리 수를 만들어서 배열에 담아
function generateRandomCode() {
  let str = '';
  const generatedCodes = [];

  while (generatedCodes.length < 3) {
    const digit = Math.floor(Math.random() * 9).toString();
    if (!generatedCodes.includes(digit)) { //배열에 포함된지 아닌지 확인하고(includes메서드), 포함하지 않으면 generatedCodes 배열과 str 문자열에 digit을 추가push메서드로 추가.
      generatedCodes.push(digit);
      str += digit;
    }
  }

  return str; // str 문자열을 반환하여 생성된 세 자리 숫자를 완성
}

function playBaseballGame() {
  const computerCode = generateRandomCode();//위에서 생성한 3자리 난수를 생성하는 함수를 변수에 담고.
  let attempts = 0;
  let correctDigits = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("게임을 시작합니다.");

  const makeGuess = () => {
    rl.question(`[${attempts + 1}번째 시도] 세 자리 숫자를 입력하세요(중복없이): `, (userCode) => {
      attempts++;

      if (userCode.length !== 3 || isNaN(userCode)) {
        console.log("올바른 입력이 아닙니다. 세 자리 숫자를 입력해주세요.");
        makeGuess();
        return;
      }

      let strikes = 0;
      let balls = 0;

      for (let i = 0; i < 3; i++) {
        const computerDigit = computerCode[i];
        const userDigit = userCode[i];

        if (computerDigit === userDigit) {
          strikes++;
        } else if (computerCode.includes(userDigit)) {
          balls++;
        }
      }

      console.log(`${balls}B${strikes}S`);

      if (strikes === 3) {
        console.log(`축하합니다! ${attempts}번 만에 맞추셨습니다.`);
        rl.close();
      } else {
        makeGuess();
      }
    });
  };

  makeGuess();

  rl.on('close', () => {
    console.log("게임을 종료합니다.");
  });
}

playBaseballGame();


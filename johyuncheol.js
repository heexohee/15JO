const readline = require("readline");


// // AS-IS
// //중복없는 난수 3개 생성 
// var generate_num = function (){
//     while(answer.length<3){
//         let r_num=parseInt(Math.random()*9);

//         if(answer.includes(r_num)===false){
//             answer.push(r_num);
//         }
//     }
// }


//TO-BE
//Set 자료구조로 중복없는 난수생성 (정답 값 생성) 
var generate_num = function () {
    let answerSet = new Set();
    while (answerSet.size < 3) {
        let r_num = parseInt(Math.random() * 9);
        answerSet.add(r_num); //Set은 중복이 안됨
    }
    let answer = [...answerSet];
    return answer;
}

console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");

function playBaseballGame() {
    const answer = generate_num();//위에서 생성한 3자리 난수를 생성하는 함수를 변수에 담고.
    console.log(`정답 : ${answer}`);
    let count = 0; //시도횟수

    //입출력 인터페이스 객체 생성  
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("게임을 시작합니다.");

    const makeGuess = () => {
        rl.question(`[${count + 1}번째 시도] 세 자리 숫자를 입력하세요(중복없이): `, (userCode) => {
            count++;
            userCode = [...userCode].map(Number); // 입력값 숫자로 변환 
            //console.log(userCode);

            if (userCode.length !== 3 || isNaN(userCode) === false) {
                console.log("올바른 입력이 아닙니다. 세 자리 숫자를 입력해주세요.");
                makeGuess();
                return;
            }

            let strikes = 0;
            let balls = 0;

            for (let i = 0; i < 3; i++) {
                if (answer[i] === userCode[i]) {
                    strikes++;
                } else if (answer.includes(userCode[i])) {
                    balls++;
                }
            }

            console.log(`${balls}B${strikes}S`);

            if (strikes === 3) {
                console.log(`축하합니다! ${count}번 만에 맞추셨습니다.`);
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
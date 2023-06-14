const readline = require("readline");

//입출력 인터페이스 객체 생성  
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

 //Set 자료구조로 중복없는 난수생성 (정답 값 생성) 
var generate_num = function (){
    let answerSet=new Set();
    while(answerSet.size<3){
        let r_num=parseInt(Math.random()*9);
        answerSet.add(r_num); //Set은 중복이 안됨
    }
    answer=[...answerSet]; 
}

generate_num(); 
console.log(answer);

let count=1; //시도횟수 체크 
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");
console.log(count+'번째 시도 :')


//입력하는 부분
rl.on("line", (line) => {
    let check = [...(line.split(' '))].map(Number); //입력된 값이 담기는 배열
    let strike = 0; // 스트라이크 수 
    let ball = 0;  //볼 수

    for(let i=0;i<check.length;i++){
        if(check[i]===answer[i]) {
            strike++;
        }
        else if(check.includes(answer[i])===true){
            ball++;
        }
    }

    console.log(strike+"B"+strike+"S");

    // 입력 종료 
    if(strike===3) {
        console.log(count+'번만에 정답!');
        console.log('게임을 종료합니다');
        rl.close();
    }
    else{
    count++;
    console.log(count+'번째 시도 :');
    }
});



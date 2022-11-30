// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.
// 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

function vote(str){
    const obj = {};
    const strArray = str.split(" ");
    for(let i=0; i<strArray.length; i++){
        if(!Object.hasOwn(obj, strArray[i])) {
            obj[strArray[i]] = 1;
        }else{
            obj[strArray[i]]++;
        }
    }
    const objSorted = Object.entries(obj).sort(([,a], [,b]) => b - a);

    return objSorted[0][0];
}

const check = vote("원범 원범 혜원 혜원 혜원 혜원 유진 유진");
console.log(check);

// 개인적으로 상당히 더럽게 풀었다고 생각...
// 아래는 답안
// const array = prompt('이름을 입력해주세요.').split(' ');
// let result = {};
// let winner = "";

// for(let index in array){
//   let val = array[index];
//   result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
// }

// winner = Object.keys(result).reduce(function(a, b){
//   return result[a] > result[b] ? a : b
// });

// console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
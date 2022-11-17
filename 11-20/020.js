// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

function num(a){
    let num1 = a.split(' ')[0];
    let num2 = a.split(' ')[1];

    let share = Math.floor(num1 / num2);
    let rest = Math.floor(num1 % num2);

    console.log(share, rest);
}

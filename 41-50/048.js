// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요
// 입출력

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD
function convert(str) {
    const check = str.split('');
    const convertArr = check.map(i => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase());
    console.log(convertArr.join(''));
    return convertArr.join('');
}

const abcd = convert("AAABBBcccddd");

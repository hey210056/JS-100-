// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

// 이를 이용하여 **현재 연도(2019)를 출력해보세요.**
function nowYear(){
    const nowTime = new Date();
    const findYear = Math.floor(nowTime.getTime()/(60*60*24*365*1000)+1970);

    return findYear;
}

console.log(nowYear());

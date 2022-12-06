// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
// 데이터
const nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

// 출력
// England 22023

function findIt(obj) {
    const sortObj = Object.values(obj);
    const sortObjtoArr = sortObj.sort((a, b) => a - b);
    const southKorea = sortObjtoArr.indexOf(220877);
    if(southKorea === 0){
    return (Object.keys(obj).find(key => obj[key] === sortObjtoArr[1]));
    } else {
        const less = sortObjtoArr[southKorea - 1];
        const over = sortObjtoArr[southKorea + 1];
        return (Math.abs(220877 - less) < Math.abs (220877 - over) ? Object.keys(obj).find(key => obj[key] === less) : Object.keys(obj).find(key => obj[key] === over));
    }
}

const check = findIt(nationWidth);
console.log(check, Math.abs(220877 - nationWidth[check]));

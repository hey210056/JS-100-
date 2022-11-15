// 데이터
var arr = [200, 100, 300];
arr.splice(2, 0, 1000);
//pass
console.log(arr);

// 출력
// [200, 100, 10000, 300]

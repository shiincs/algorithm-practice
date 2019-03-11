// 핸드폰 번호 가리기

// 1. for문
// function solution(num) {
//   for(let i=0; i < num.length-4; i++) {
//     num = num.replace(num[i], '*')
//   }
//   return num
// }

// 2. string repeat, concat, slice
function solution(num) {
  return '*'.repeat(num.length-4).concat(num.slice(-4))
}

solution('01037750078')
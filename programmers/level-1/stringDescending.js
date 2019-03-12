// 문자열 내림차순으로 배치하기

// array sort 사용
// function solution(s) {
//   return s.split('').sort((x, y) => {
//     if(x < y) {
//       return 1
//     } else if(x === y) {
//       return 0
//     } else {
//       return -1
//     }
//   }).join('')
// }

// array reverse 사용
function solution(s) {
  return s.split('').reverse().join('')
}
solution('Zbcdefg')
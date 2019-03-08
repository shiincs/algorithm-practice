// 수박수박수박수박수박수?

// for문 사용
// function solution(n) {
//   let answer = '';
//   for(let i=0; i < n; i++) {
//     i % 2 === 0 ? answer += '수' : answer += '박'
//   }
//   return answer
// }

// string repeat, slice 사용
function solution(n) {
  let answer = '수박';
  console.log(answer.repeat(n).slice(0, n))
}

solution(4)
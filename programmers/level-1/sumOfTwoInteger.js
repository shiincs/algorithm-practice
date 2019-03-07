// 두 정수 사이의 합

// sort 이용
// function solution(a, b) {
//   const sorted = [a, b].sort((x, y) => x - y);
//   let answer = 0;
//   for(let i=sorted[0]; i <= sorted[1]; i++) {
//     answer += i
//   }
//   return answer
// }

// min, max 이용
function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let answer = 0;
  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}

// solution(3, 5)
solution(3, 3);

// 최솟값 만들기

// 효율성 테스트 통과 못함..
// function solution(a, b) {
//   let answer = 0;
//   const length = a.length;

//   for(let i=0; i < length; i++) { 
//     answer += Math.min(...a) * Math.max(...b)
//     a.splice(a.indexOf(Math.min(...a)), 1);
//     b.splice(b.indexOf(Math.max(...b)), 1);
//   }

//   return answer
// }

// 아니 이것도 효율성을 통과못하네 ㅠㅠ
function solution(a, b) {
  let answer = 0;

  a = a.sort((x, y) => x - y);
  b = b.sort((x, y) => y - x);

  for (let i = 0; i < a.length; i++) {
    answer += (a[i] * b[i]);
  }

  return answer;
}

// 제로초마저 효율성 통과를 못하다니..
function solution(A, B) {
  const b = B.sort((p, c) => c - p);
  return A.sort((p, c) => p - c).map((v, i) => v * b[i]).reduce((a, c) => a + c, 0)
}

solution([1, 4, 2], [5, 4, 4])
// solution([1,2], [3, 4])
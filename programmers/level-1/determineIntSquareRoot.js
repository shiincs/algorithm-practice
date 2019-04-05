// 정수 제곱근 판별

// 내 코드(구리다..)
// function solution(n) {
//   let answer = null;
//   for(let i=0; i <= n; i++) {
//     if(i**2 === n) {
//       answer = i;
//       break;
//     }
//   }
//   if(answer) {
//     return (answer+1)**2
//   } else {
//     return -1
//   }
// }

// 다른 사람의 코드
function solution(n) {
  if (n % Math.sqrt(n) === 0) {
    return (Math.sqrt(n) + 1) ** 2
  } else {
    return -1
  }
}

solution(121)
// solution(3)
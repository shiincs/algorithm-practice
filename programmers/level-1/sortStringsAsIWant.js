// 문자열 내 마음대로 정렬하기
function solution(arr, idx) {
  return arr.sort((x, y) => x[idx] < y[idx] ? -1 : x[idx] > y[idx] ? 1 : x < y ? -1 : 1)
}

/* sort 함수 */
//   if(x[idx] < y[idx]) {
//     return -1
//   } else if(x[idx] > y[idx]) {
//     return 1
//   } else {
//     return x < y ? -1 : 1
//   }
// })

// solution(['sun', 'bed', 'car'], 1)
solution(['abce', 'abcd', 'cdx'], 2)

/* 다른 사람의 풀이 (이게 더 좋다!) */
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
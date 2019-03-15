/* 행렬의 덧셈 */

// 1. for문
function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const inner = [];
    for (let j = 0; j < arr1[i].length; j++) {
      inner.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(inner);
  }
  return answer;
}

// 2. map
function solution(arr1, arr2) {
  return arr1.map((i, d) => i.map((t, x) => t + arr2[d][x]));
}

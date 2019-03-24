// 평균 구하기

function solution(arr) {
  return arr.reduce((acc, item) => acc + item, 0) / arr.length;
}

solution([1, 2, 3, 4]);
solution([5, 5]);
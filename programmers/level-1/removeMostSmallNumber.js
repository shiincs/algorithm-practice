// 제일 작은 수 제거하기

// 1. sort 이용
// function solution(arr) {
//   const minNum = arr.slice().sort((x, y) => x - y)[0]
//   return arr.length <= 1 ? [-1] : arr.filter(item => item !== minNum)
// }

// 2. Math.min() 이용
function solution(arr) {
  const minNum = Math.min(...arr);
  return arr.length <= 1 ? [-1] : arr.filter(item => item !== minNum);
}

solution([4, 3, 2, 1]);
// solution([10])

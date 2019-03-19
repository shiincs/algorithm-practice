// 나누어 떨어지는 숫자 배열

function solution(arr, div) {
  const result = arr.filter(item => item % div === 0).sort((x, y) => x - y)
  return result.length === 0 ? [-1] : result
}

solution([5,9,7,10], 5)
solution([2, 36, 1, 3], 1)
// solution([3,2,6], 10)

// k번째수

function solution(arr, comm) {
  const answer = []
  comm.forEach(item => answer.push(arr.slice(item[0] - 1, item[1]).sort((x, y) => x - y)[item[2] - 1]))
  return answer
}

solution([1, 5, 2, 6, 3, 7, 4], [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3]
])
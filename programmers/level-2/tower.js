function solution(h) {
  const answer = [];

  for (let i = h.length - 1; i >= 0; i -= 1) {
    i === 0 && answer.unshift(0)
    const sliced = h.slice(0, i)

    for (let j = sliced.length - 1; j >= 0; j -= 1) {
      if (h[j] > h[i]) {
        answer.unshift(sliced.lastIndexOf(h[j]) + 1)
        break;
      } else if (j === 0) {
        answer.unshift(0)
      }
    }
  }

  return answer
}

solution([6, 9, 5, 7, 4])
solution([3, 9, 9, 3, 5, 7, 2])
solution([1, 5, 3, 6, 7, 6, 5])
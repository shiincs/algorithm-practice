// 예산
function solution(arr, budget) {
  arr.sort((x, y) => x - y)
  let idx = 0;
  let answer = 0;

  do {
    if (budget - arr[idx] >= 0) {
      budget -= arr[idx];
      answer += 1;
      idx += 1;
    } else {
      break
    }
  } while (budget > 0)

  return answer
}

// 다른 사람의 아이디어
function solution(arr, budget) {
  let sum = 0;

  return arr.sort((x, y) => x - y).reduce((acc, item) => {
    sum += item;
    if (sum <= budget) {
      acc += 1;
    }
    return acc
  }, 0)
}

solution([1, 3, 2, 5, 4], 9)
solution([2, 2, 3, 3], 10)
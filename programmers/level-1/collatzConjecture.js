// 콜라츠 추측
function solution(n) {
  let count = 0;
  do {
    if (n === 1) {
      return count;
    } else {
      n % 2 === 0 ? n = n / 2 : n = (n * 3) + 1;
      count++;
    }
  } while (count <= 500)
  return -1;
}

solution(6)
// solution(626331)
// 하샤드 수
function solution(n) {
  const sum = n.toString().split('').reduce((acc, item) => acc + Number(item), 0)
  return n % sum === 0 ? true : false
}

// solution(10)
// solution(12)
// solution(11)
solution(13)
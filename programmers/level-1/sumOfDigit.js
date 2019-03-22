// 자릿수 더하기
function solution(n) {
  // let answer = 0;
  // n.toString().split('').forEach(item => answer += Number(item))
  // return answer

  return n.toString().split('').reduce((acc, item) => acc += Number(item), 0)
}

solution(123)
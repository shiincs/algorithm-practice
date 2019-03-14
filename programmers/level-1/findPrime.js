// 소수 찾기 (에라토스테네스의 체))
function solution(n) {
  const arr = new Array(n+1).fill(true)
  // 정수 1은 소수가 아니므로 false 처리
  arr[1] = false;

  for(let i=2; i <= n; i++) {
    for(let j=i*2; j <= n; j+=i) {
      if(j%i===0) {
        arr[j] = false
      }
    }
  }

  // 배열의 0번 인덱스 삭제
  arr.shift()
  return arr.filter(i => i === true).length
}

solution(10)
// solution(5)
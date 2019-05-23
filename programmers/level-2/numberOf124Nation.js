// 124 나라의 숫자
function solution(n) {
  const arr = [];
  getRest(n, arr);
  getQuotient(n, arr);
  return arr.join('')
}

function getRest(n, arr) {
  if (n % 3 === 1) {
    arr.unshift(1)
  } else if (n % 3 === 2) {
    arr.unshift(2)
  } else if (n % 3 === 0) {
    arr.unshift(4)
  }
}

function getQuotient(n, arr) {
  if (Math.ceil(n / 3) > 1) {
    const quotient = Math.ceil(n / 3) - 1;
    if (quotient < 4) {
      getRest(quotient, arr)
    } else if (quotient >= 4) {
      getRest(quotient, arr)
      getQuotient(quotient, arr)
    }
  }
}

solution(13) // '111'

// 다른 사람의 답 (갓갓...)
// function solution(n) {
//   return n === 0 ? '' : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
// }
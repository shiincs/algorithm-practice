// x만큼 간격이 있는 n개의 숫자

// 기본형
function solution(x, n) {
  const result = [];
  let flag = 0;
  for (let i = 0; i < n; i++) {
    flag += x;
    result.push(flag);
  }
  return result;
}

// array map
function solution(x, n) {
  return [...Array(n)].map((item, index) => (index + 1) * x);
}

solution(2, 5);
solution(-4, 2);

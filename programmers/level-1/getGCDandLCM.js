// 최대공약수와 최소공배수
function solution(n1, n2) {
  // 최대공약수
  const gcd = getGcd(n1, n2)
  // 최소공배수
  const lcm = (n1 * n2) / gcd

  return [gcd, lcm]
}


function getGcd(a, b) {
  return a % b === 0 ? b : getGcd(b, a % b)
}

solution(3, 12)
solution(2, 5)
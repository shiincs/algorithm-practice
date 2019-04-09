// 시저 암호
function solution(s, n) {
  const charSet = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';

  s.split('').forEach(item => {
    if (item === ' ') {
      answer += ' '
    } else if (item.toLowerCase() === item) {
      answer += charSet[(charSet.indexOf(item.toLowerCase()) + n) % charSet.length]
    } else {
      answer += charSet[(charSet.indexOf(item.toLowerCase()) + n) % charSet.length].toUpperCase()
    }
  })

  return answer
}


// solution('AB', 1)
// solution('z', 1)
solution('a B z', 4)
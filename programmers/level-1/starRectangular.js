// for문
function solution(str) {
  const numArr = [];
  str.split(' ').forEach(item => numArr.push(parseInt(item)))
  let answer = '';

  for(let i=0; i < numArr[1]; i++) {
    for(let j=0; j < numArr[0]; j++) {
      answer += '*'    
    }
    i === numArr[1]-1 ? null : answer += '\n'
  }
  console.log(answer)
}

// repeat
function solution(str) {
  const numArr = [];
  str.split(' ').forEach(item => numArr.push(parseInt(item)))
  let answer = '';

  answer += '*'.repeat(numArr[0]).concat('\n').repeat(numArr[1])

  console.log(answer)
}

solution('5 3')
solution('2 2')
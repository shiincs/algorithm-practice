// 이상한 문자 만들기

// 이렇게 하면 통과 못함
// function solution(s) {
//   const arr = s.split('')
//   arr.forEach((i, idx, arr) => {
//     if(idx%2 === 0) {
//       arr.splice(idx, 1, i.toUpperCase())
//     } else if(idx%2 === 1) {
//       arr.splice(idx, 1, i.toLowerCase())
//     }
//   })
//   return arr.join('')
// }

// 통과하는 방법
// function solution(s) {
//   const arr = s.split(' ');
//   const answer = [];
//   for(let i=0; i < arr.length; i++) {
//     const arr2 = arr[i].split('')
//     for(let j=0; j < arr2.length; j++) {
//       if(j%2===0) {
//         arr2.splice(j, 1, arr2[j].toUpperCase())
//       } else if(j%2===1) {
//         arr2.splice(j, 1, arr2[j].toLowerCase())
//       }
//     }
//     answer.push(arr2.join(''))
//   }
//   return answer.join(' ')
// }

// arr.map 사용
function solution(s) {
  return s
    .split(' ')
    .map(a => {
      return a
        .split('')
        .map((b, idx) => {
          return idx % 2 === 0 ? b.toUpperCase() : b.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}

solution('try hello world');

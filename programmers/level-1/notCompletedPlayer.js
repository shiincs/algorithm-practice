// 완주하지 못한 선수

// 이렇게 하면 되긴 하는데 효율성이 0점이다...ㅠ
// function solution(p, c) {
//   for(let i=0; i < c.length; i++) {
//     if(p.includes(c[i])) {
//       p.splice(p.indexOf(c[i]), 1)
//     }
//   }
//   return p.join('')
// }

// 이것도 효율성 0...
// function solution(p, c) {
//   c.forEach((item, idx, arr) => {
//     p.splice(p.indexOf(item), 1)
//   })
//   return p.join('')
// }

// 효율성 테스트 통과
function solution(p, c) {
  p.sort();
  c.sort();
  // for(let i=0; i < p.length; i++) {
  //   if(p[i] !== c[i]) {
  //     return p[i]
  //   }
  // }
  for(let i in p) {
    if(p[i] !== c[i]) return p[i]
  }
}

solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
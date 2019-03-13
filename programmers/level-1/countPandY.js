// 문자열 내 p와 y의 개수

// for문
// function solution(s) {
//   let p = 0;
//   let y = 0;
//   for(let i=0; i < s.length; i++) {
//     if(s[i] === 'p' || s[i] === 'P') {
//       p += 1;
//     } else if(s[i] === 'y' || s[i] === 'Y') {
//       y += 1;
//     }
//   }
//   return p === y ? true : false;
// }

function solution(s) {
  const result = s.split('').reduce(
    (acc, item) => {
      if (item === 'p' || item === 'P') {
        acc.p += 1;
      } else if (item === 'y' || item === 'Y') {
        acc.y += 1;
      }
      return acc;
    },
    { p: 0, y: 0 }
  );
  return result.p === result.y;
}

solution('pPoooyY');
// solution('Pyy')

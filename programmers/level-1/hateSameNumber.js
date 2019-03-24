// 같은 숫자는 싫어

// 정확성 테스트만 통과(효율성은 실패)
// function solution(arr) {
//   return arr.reduce((acc, item, index, array) => {
//     if(array[index] !== array[index+1]) {
//       acc.push(item)
//     }
//     return acc
//   }, [])
// }

// 효율성 실패..
// function solution(arr) {
//   const answer = []
//   for(let i=0; i < arr.length; i++) {
//     arr[i] !== arr[i+1] && answer.push(arr[i])
//   }
//   return answer
// }

// 효율성 통과!
function solution(arr) {
  return arr.filter((item, index, arr) => item !== arr[index+1])
}

solution([1,1,3,3,0,1,1])
// solution([4,4,4,3,3])
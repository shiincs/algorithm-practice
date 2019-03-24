// 가운데 글자 가져오기

function solution(str) {
  return str.length % 2 === 0 ?
    str.slice(str.length / 2 - 1, str.length / 2 + 1) : // str.slice(Math.floor(str.length/2), Math.floor(str.length/2)+1)
    str.charAt(Math.floor(str.length / 2));
}

solution('abcde');
// solution("qwer")
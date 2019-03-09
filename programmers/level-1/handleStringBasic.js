// 문자열 다루기 기본

function solution(src) {
  return src.length === (4 || 6)
    ? src.split('').every(item => !Number.isNaN(parseInt(item)))
    : false;
}

solution('*123');
// solution('1234')

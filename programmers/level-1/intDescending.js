const solution = (num) => Number(num.toString().split('').sort((x, y) => y - x).join(''))

solution(118372)
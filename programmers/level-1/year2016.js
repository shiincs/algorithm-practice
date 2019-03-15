// 2016년(윤년) 요일 구하기

function solution(m, d) {
  const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const date = new Date(2016, m-1, d)
  return dayList[date.getDay()]
}

solution(2, 32)
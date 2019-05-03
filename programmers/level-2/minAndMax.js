// 최댓값과 최솟값
function solution(s) {
	return s
		.split(' ')
		.sort((x, y) => x - y)
		.map(item => Number(item))
		.filter((item, idx, arr) => idx === 0 || idx === arr.length - 1)
		.join(' ');
}

solution('1 2 3 4');
solution('-1 -2 -3 -4');
solution('-1 -1');

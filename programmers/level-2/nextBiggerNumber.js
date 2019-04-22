// 다음 큰 숫자
function solution(n) {
	for (let i = n + 1; i < Infinity; i++) {
		const iCount = i
			.toString(2)
			.split('')
			.filter(item => item === '1').length;
		const nCount = n
			.toString(2)
			.split('')
			.filter(item => item === '1').length;
		if (iCount === nCount) {
			return i;
		}
	}
}

// 다른 사람의 답(정규식과 재귀함수 활용)
function solution(n, a = n + 1) {
	return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length
		? a
		: solution(n, a + 1);
}

solution(78); // 83
solution(15); // 23

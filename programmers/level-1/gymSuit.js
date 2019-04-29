// 체육복

// 이건 되는 코드
function solution(n, lost, reserve) {
	let r = reserve.filter(item => !lost.includes(item));
	let l = lost.filter(item => !reserve.includes(item));

	r.forEach(x => {
		let flag;
		if (l.includes(x - 1)) {
			flag = l.indexOf(x - 1);
		} else if (l.includes(x + 1)) {
			flag = l.indexOf(x + 1);
		} else {
			flag = null;
		}
		if (flag !== null) {
			l.splice(flag, 1);
		}
	});

	return n - l.length;
}

// 이것도 되는 코드
function solution(n, lost, reserve) {
	// 여벌을 가지고 있는 학생이 잃어버렸다면 reserve 배열과 lost 배열에서 모두 삭제
	let r = reserve.filter(item => !lost.includes(item));
	let l = lost.filter(item => !reserve.includes(item));

	r.forEach(item => {
		if (l.includes(item - 1)) {
			l.splice(l.indexOf(item - 1), 1);
		} else if (l.includes(item + 1)) {
			l.splice(l.indexOf(item + 1), 1);
		}
	});

	return n - l.length;
}

// 이건 진짜 코딩 신인듯..
function solution(n, lost, reserve) {
	return (
		n -
		lost.filter(a => {
			const b = reserve.find(r => Math.abs(r - a) <= 1);
			if (!b) return true;
			reserve = reserve.filter(r => r !== b);
		}).length
	);
}

solution(5, [2, 4], [1, 3, 5]);
solution(5, [1, 4], [1, 3, 5]);
solution(5, [2, 4], [3]);
solution(3, [3], [1]);

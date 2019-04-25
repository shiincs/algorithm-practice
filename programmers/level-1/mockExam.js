// 모의고사
function solution(answer) {
	const sample = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	];
	const score = [];

	for (let i = 0; i < sample.length; i++) {
		let innerScore = 0;
		for (let j = 0; j < answer.length; j++) {
			if (sample[i][j % sample[i].length] === answer[j]) {
				innerScore += 1;
			}
		}
		score.push(innerScore);
	}

	return score
		.reduce((acc, item, idx) => {
			if (item === Math.max(...score)) {
				acc.push(idx + 1);
			}
			return acc;
		}, [])
		.sort((x, y) => x - y);
}

// solution([1,2,3,4,5])
solution([1, 3, 2, 4, 2]);

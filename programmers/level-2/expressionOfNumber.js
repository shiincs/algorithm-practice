// 숫자의 표현
function solution(n) {
	let answer = 0;
	let sum = 0;

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j <= n; j++) {
			sum += j;
			if (sum < n) {
				continue;
			} else if (sum === n) {
				answer += 1;
				sum = 0;
				break;
			} else if (sum > n) {
				sum = 0;
				break;
			}
		}
	}

	return answer;
}

solution(15);

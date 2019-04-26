// 피보나치 수
function solution(n) {
	const pibonacci = [0, 1];
	for (let i = 2; i <= n; i++) {
		pibonacci[i] = (pibonacci[i - 1] + pibonacci[i - 2]) % 1234567; // 여기에서 각 피보나치 수를 1234567로 나눈 나머지 값으로 구해주는게 핵심이다.
	}
	return pibonacci[n]; // 여기에서만 % 1234567 하면 수가 너무 커져서 NaN으로 나온다.
}

// solution(3)
// solution(5)
solution(99999);

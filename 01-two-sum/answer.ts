function twoSum(numbers: number[], target: number): number[] {
	const matches = new Set<number>();

	for (let idx = 0; idx < numbers.length; idx++) {
		for (let jdx = idx + 1; jdx <= numbers.length; jdx++) {
			const sum = numbers[idx] + numbers[jdx];
			if (sum === target) {
				matches.add(idx).add(jdx);
			}
		}
	}

	return Array.from(matches);
}

function removeElement(nums: number[], val: number): number {
	let valMatches = 0;
	let copyIndex = 0;
	const numsCopy = [...nums];

	for (let index = 0; index < numsCopy.length; index++) {
		if (val !== numsCopy[index]) {
			nums[copyIndex] = numsCopy[index];
			valMatches++;
			copyIndex++;
		}
	}
	return valMatches;
}

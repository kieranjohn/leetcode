function isPalindrome(input: number): boolean {
	const forward = Array.from(`${input}`);
	let reverse: string[] = [];
	forward.map((x) => reverse.unshift(x));
	return forward.join() === reverse.join();
}

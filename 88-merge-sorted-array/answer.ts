/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	// quick and dirty
	// const update = nums1.splice(0,m).concat(nums2.splice(0,n)).sort();
	// for(let idx = 0; idx<update.length ;idx++){
	//     nums1[idx] = update[idx];
	// }

	// how they want it solved
	const old1 = [...nums1];
	const retLength = m + n;
	let count = 0;
	let index1 = 0;
	let index2 = 0;
	while (count < retLength) {
		// stated max size of argument is 200;
		let x = index1 < m ? old1[index1] : 201;
		let y = index2 < n ? nums2[index2] : 201;

		if (x < y) {
			nums1[count] = x;
			count++;
			index1++;
		} else {
			nums1[count] = y;
			count++;
			index2++;
		}
	}
}

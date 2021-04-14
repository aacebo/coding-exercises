/**
 * @param {Array<number>} arr
 * @param {number} start
 * @param {number} end
 */
module.exports = function quickSort(arr, start = 0, end = arr.length - 1) {
	if (start >= end) return;

	const idx = partition(arr, start, end);

	quickSort(arr, start, idx - 1);
	quickSort(arr, idx, end);
}

/**
 * @param {Array<number>} arr
 * @param {number} start
 * @param {number} end
 */
function partition(arr, start, end) {
	const mid = Math.floor((start + end) / 2);
	let i = start;
	let j = end;

	while (i <= j) {
		while (arr[i] < arr[mid]) {
			i++;
		}

		while (arr[j] > arr[mid]) {
			j--;
		}

		if (i <= j) {
			const tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;

			i++;
			j--;
		}
	}

	return i;
}

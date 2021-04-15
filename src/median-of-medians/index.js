/**
 * @param {Array<number>} arr
 * @param {number} start
 * @param {number} end
 * @returns {number} median
 */
 module.exports = function medianOfMedians(arr, start = 0, end = arr.length - 1) {
	const mid = Math.floor((arr.length - 1) / 2);
	const pivotIdx = Math.floor((start + end) / 2);

	if (start >= end) return median(arr, mid);

	const newPivotIdx = partition(arr, start, end, pivotIdx);

	if (newPivotIdx < mid) {
		return medianOfMedians(arr, newPivotIdx + 1, end);
	} else if (newPivotIdx > mid) {
		return medianOfMedians(arr, start, newPivotIdx - 1);
	}

	return median(arr, newPivotIdx);
}

/**
 * @param {Array<number>} arr
 * @param {number} start
 * @param {number} end
 * @param {number} pivotIdx
 * @returns {number} newPivotIdx
 */
function partition(arr, start, end, pivotIdx) {
	let i = start;
	let j = end;
	let newPivotIdx = pivotIdx;

	while (i <= j) {
		while (arr[i] < arr[pivotIdx]) {
			i++;
		}

		while (arr[j] > arr[pivotIdx]) {
			j--;
		}

		if (i <= j) {
			if (i === newPivotIdx) {
				newPivotIdx = j;
			} else if (j === newPivotIdx) {
				newPivotIdx = i;
			}

			const tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;

			i++;
			j--;
		}
	}

	return newPivotIdx;
}

/**
 * @param {Array<number>} arr
 * @param {number} idx
 * @returns {number} median
 */
function median(arr, idx) {
	if (arr.length % 2 === 0) {
		return (arr[idx] + arr[idx + 1]) / 2;
	}

	return arr[idx];
}

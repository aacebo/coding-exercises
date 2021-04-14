const quickSort = require('./index');

describe('quickSort', () => {
	it('should sort array', () => {
		const arr = [2, 4, 1, 3, 8];
		quickSort(arr);
		expect(arr).toEqual([1, 2, 3, 4, 8]);
	});

	it('should sort even array', () => {
		const arr = [2, 4, 72, -1, 3, 8];
		quickSort(arr);
		expect(arr).toEqual([-1, 2, 3, 4, 8, 72]);
	});
});

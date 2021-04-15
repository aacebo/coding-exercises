const medianOfMedians = require('./index');

describe('medianOfMedians', () => {
	it('should find test case 1', () => {
		const arr = [2, 4, 1, 3, 8];
		expect(medianOfMedians(arr)).toEqual(3);
	});

	it('should find test case 2', () => {
		const arr = [72, 4, 2, -1, 3, 8];
		expect(medianOfMedians(arr)).toEqual(3.5);
	});

	it('should find test case 3', () => {
		const arr = [10, 1, 67, 20, 56, 8, 43, 90, 54, 34, 0];
		expect(medianOfMedians(arr)).toEqual(34);
	});

	it('should find test case 4', () => {
		const arr = [1, 6, 3, 5, 8, 9, 4, 10, 2];
		expect(medianOfMedians(arr)).toEqual(5);
	});

	it('should find test case 5', () => {
		const arr = [1, 6, 3, 5, 8, 9, 4, 10, 2, 7];
		expect(medianOfMedians(arr)).toEqual(5.5);
	});
});

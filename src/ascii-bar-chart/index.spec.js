const asciiBarChart = require('./index');

describe('asciiBarChart', () => {
	it('should build with even spacing', () => {
		const y = [1, 8];
		const x = [200, 800];

		const data = [
			[200, 300, 2],
			[300, 400, 0],
			[400, 500, 8],
			[500, 600, 1],
			[600, 700, 0],
			[700, 800, 5]
		];

		const answer = [
			'8           *               ',
			'7           *               ',
			'6           *               ',
			'5           *           *   ',
			'4           *           *   ',
			'3           *           *   ',
			'2   *       *           *   ',
			'1   *       *   *       *   ',
			' 200 300 400 500 600 700 800'
		];

		const res = asciiBarChart(x, y, data);

		expect(res).toEqual(answer);
	});

	it('should build uneven spacing', () => {
		const y = [1, 10];
		const x = [5, 35];

		const data = [
			[5, 10, 2],
			[10, 15, 0],
			[15, 20, 8],
			[20, 25, 1],
			[25, 30, 0],
			[30, 35, 5]
		];

		const answer = [
			'10                   ',
			' 9                   ',
			' 8       *           ',
			' 7       *           ',
			' 6       *           ',
			' 5       *        *  ',
			' 4       *        *  ',
			' 3       *        *  ',
			' 2 *     *        *  ',
			' 1 *     *  *     *  ',
			'  5 10 15 20 25 30 35'
		];

		const res = asciiBarChart(x, y, data);

		expect(res).toEqual(answer);
	});
});

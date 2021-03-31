/**
 * @param {number[]} x
 * @param {number[]} y
 * @param {number[][]} data [...[x1, x2, freq]]
 * @returns string[]
 */
module.exports = function(x, y, data) {
	const ypos = y[1];
	const yend = y[0];
	const res = [];
	const maxYSpacing = `${y[1]}`.length;

	// build y axis with bars
	for (let i = ypos; i >= yend; i--) {
		const ySpacing = `${i}`.length;
		let row = '';

		if (ySpacing < maxYSpacing) {
			row += spaces(maxYSpacing - ySpacing);
		}

		row += `${i}`;

		for (let j = 0; j < data.length; j++) {
			const x1 = data[j][0];
			const x2 = data[j][1];
			const freq = data[j][2];

			row += spaces(`${x1}`.length);

			if (freq >= i) {
				row += '*';
			} else {
				row += ' ';
			}

			if (j === data.length - 1) {
				row += spaces(`${x2}`.length);
			}
		}

		res.push(row);
	}

	// build x axis
	let bottom = spaces(maxYSpacing - 1);

	for (let i = 0; i < data.length; i++) {
		bottom += ` ${data[i][0]}`;

		if (i === data.length - 1) {
			bottom += ` ${data[i][1]}`;
		}
	}

	res.push(bottom);

	return res;
}

/**
 * @param {number} n
 * @returns string
 */
function spaces(n) {
	let res = '';

	for (let i = 0; i < n; i++) {
		res += ' ';
	}

	return res;
}

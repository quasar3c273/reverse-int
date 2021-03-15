module.exports = function reverse (n) {
	let result = String(n).split('').reverse();
	return Number.parseInt(result.join(''));
}

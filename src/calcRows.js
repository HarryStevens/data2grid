// Calculates the optimal number of rows for a number of data points.
export default function calcRows(number){

	// errors

	// the number argument is not declared
	if (!number) {
		throw new Error("You must pass a number.");
	}

	// the number argument is declared but it is not a positive integer
	if (number && (parseInt(number) !== number || Number(number) <= 0)) {
		throw new Error("Rows must be a positive integer.");
	}

	return Math.ceil(Math.sqrt(number));
}
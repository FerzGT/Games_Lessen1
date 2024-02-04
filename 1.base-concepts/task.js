"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = (-Math.pow(b, 2) - 4 * a * c);

	switch (d) {
		case (d == 0): {
			console.log('Дискриминант равен нулю, то корень один');
			arr[0] = -b / (2 * a);
			console.log(`X = ${arr[0]}`);
		}
		break;
		case (d > 0): {
			console.log('Дискриминант больше нуля');
			arr[0] = (-b + Math.sqrt(d)) / (2 * a);
			arr[1] = (-b - Math.sqrt(d)) / (2 * a);
			console.log(`X1 = ${arr[0]} X2 = ${arr[1]}`);
		}
		break;
		default:
			console.log('Дискриминант меньше нуля (нет решенья)');
			break;
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}
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
			console.log('Дискриминант меньше нуля (нет решения)');
			break;
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let loanBody = amount - contribution;
	let percentMonth = (percent / 100) / 12;
	let monthlyPayment;
	let debtRepaid;
	monthlyPayment = loanBody * (percentMonth + (percentMonth / (Math.pow((1 + percentMonth), countMonths) - 1)));
	debtRepaid = monthlyPayment * countMonths;
	console.log(`Ввод: ${percent}, ${contribution}, ${amount}, ${countMonths}. Вывод: ${debtRepaid.toFixed(2)}`);
}
calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 0, 20000, 24);
calculateTotalMortgage(10, 1000, 20000, 24);
calculateTotalMortgage(10, 20000, 20000, 24);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);
"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = (Math.pow(b, 2) - 4 * a * c);
 console.log(discriminant);
	if (discriminant > 0) {
		arr[0] = Math.floor((-b + Math.sqrt(discriminant)) / (2 * a));
   		arr[1] = Math.ceil((-b - Math.sqrt(discriminant)) / (2 * a));;
	} else if (discriminant == 0) {
		arr[0] = Math.ceil(-b / (2 * a));
	}
	
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let loanBody = amount - contribution;
	let percentMonth = (percent / 100) / 12;
	let monthlyPayment;
	let debtRepaid;
	monthlyPayment = loanBody * (percentMonth + (percentMonth / (Math.pow((1 + percentMonth), countMonths) - 1)));
	debtRepaid = (monthlyPayment * countMonths).toFixed(2);
	return Number(debtRepaid);
}

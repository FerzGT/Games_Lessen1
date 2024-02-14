function getArrayParams(...arr) {
let min = arr[0];
let max = arr[0];
let arithmeticMean = 0;
let avg; 

for (let i = 0; i < arr.length; i++) {
if (arr[i] < min) {
  min = arr[i];
};
if (arr[i] > max) {
  max = arr[i];
};
arithmeticMean+=arr[i]/arr.length;
};

avg = Number((arithmeticMean).toFixed(2));

   return { min: min, max: max, avg: avg };
};


function summElementsWorker(...arr) {
  let result;
  
  result = arr.reduce((acc, value) => acc + value, 0);
  return (result);
   
}

function differenceMaxMinWorker(...arr) {
let differenceMaxMin;
if (arr.length == 0)  {
  return (0);
} else {
  differenceMaxMin = (Math.max(...arr) - Math.min(...arr));
  return (differenceMaxMin);
};
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
let differenceEvenOdd;

for ( let i=0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    countEvenElement += arr[i];
  } else {
    sumEvenElement += arr[i];
  };
};
differenceEvenOdd = sumEvenElement - countEvenElement;
return (differenceEvenOdd);

}

function averageEvenElementsWorker(...arr) {
  let averageEvenElements = 0;
  const result = [];
  
  if (arr.length == 0)  {
    return (0);
  } else {
  for ( let i=0; i < arr.length; i++) {
  if (arr[i] % 2 ==0) {
    result.push(arr[i]);
  };
  };
  return (averageEvenElements=((result.reduce((sum, current) => sum + current, 0))/result.length));
}; 

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i += 1) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
};

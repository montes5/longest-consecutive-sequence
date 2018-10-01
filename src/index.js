module.exports = function longestConsecutiveLength(array) {
  array = [...(new Set(array))].sort((first, second) => first - second);
	let solution = [];
	if(array.length > 1) {
		let tempArr = [];
    for(let i = 1; i < array.length; i++) {
        if(array[i] == array[i - 1] + 1) {
            if(array[i - 1] != tempArr[tempArr.length - 1]) tempArr.push(array[i - 1]);
            tempArr.push(array[i]);
        }
        else {
            if(tempArr.length > solution.length) solution = tempArr;
            tempArr = [];
        }
    }
    if(tempArr.length > solution.length) solution = tempArr;
    tempArr = [];
		if(solution.length == 0) solution.push(array[0]);
  }
	else {
		solution = array;
  }
	return solution.length;
}

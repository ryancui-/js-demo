var insertSort = function(array, n) {
  for (var i=array.length-1; i>=0; i--) {
    if (array[i] === n) {
      return;
    }
  }

  for (var i=array.length-1; i>=0; i--) {
    if (n > array[i]) {
      array[i+1] = n;
      break;
    } else {
      array[i+1] = array[i];
    }
  }
}

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  var result = [1];
  var i = 0;

  while (i < n) {
    var base = result[i++];

    for (var j=0; j<primes.length; j++) {
      var newValue = base * primes[j];
      insertSort(result, newValue);
    }
  }

  console.log(result);
  return result[n-1];
};

export default nthSuperUglyNumber;
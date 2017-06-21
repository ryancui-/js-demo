/**
 * Created by ryancui on 2017/6/21.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var convert = function(s) {
  var reg = /[^A-Za-z0-9]/g
  return s.replace(reg, '').toLowerCase();
}

var isPalindrome = function(s) {
  var handle = convert(s);

  if (handle.length > 0) {
    for (var i = 0, j = handle.length - 1; i++, j--; i < handle.length && j >= 0 && i < j) {
      if (handle[i] !== handle[j]) {
        return false;
      }
    }
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome(' '));
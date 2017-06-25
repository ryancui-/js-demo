var a = []

var foo = function() {
  for (var i=0; i<5; i++) {
    a[i] = (function(j) {
      return function() { 
        console.log(j)
      }
    })(i)
  }
}

foo()

for (var i=0; i<5; i++) {
  a[i]()
}

function getArr( size ) {
  if (size === 1) {
    return [[0], [1]]
  }

  var result = []
  var arr = getArr(size - 1)
  arr.forEach(function(item) {
    result.push([0, ...item])
    result.push([1, ...item])
  })

  return result
}
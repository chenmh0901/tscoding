function sum () {
  const arr=arguments
  return arr
}

function sum2 (...rest) {
  const arr=rest
  return arr
}
/**
 * [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
 */
console.log(sum(1,2,3,4,5)) 
/**
 * [ 1, 2, 3, 4, 5 ]
 */
console.log(sum2(1,2,3,4,5))

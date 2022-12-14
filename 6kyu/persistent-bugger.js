// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    count = 0
    while(num.toString().length > 1){
      num = num.toString().split('').reduce((acc,c) => acc *= +c, 1)
      count++
    }return count
  }
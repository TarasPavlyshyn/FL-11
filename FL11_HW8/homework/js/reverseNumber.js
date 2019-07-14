function reversedNumber(a) {
    
    return (parseFloat(a.toString().split('')
    .reverse().join('')) * Math.sign(a))                 
  }

  reversedNumber(5961);
  reversedNumber(-3690);
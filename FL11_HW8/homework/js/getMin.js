function getMin() {
  var minElem = arguments[0];

    for (var i = 0; i < arguments.length; i++ ){
      if (minElem > arguments[i]){
        minElem = arguments[i]           
        }
    }
    return minElem;
}

getMin(6, 6, 7, -1, 5);
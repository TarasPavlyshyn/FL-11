function pipe (a) {
	for (var i = 1; i < arguments.length; i++) {
		a = arguments[i](a);
	}
	
	return a;
}

function addOne(x) {
  return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);
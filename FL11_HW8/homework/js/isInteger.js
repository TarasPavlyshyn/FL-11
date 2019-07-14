function isInteger(a){
    var b = Math.ceil(a);
    var res = b - a;
    if (res > 0 ){
        return false;
    } else {
        return true
    }
}

isInteger(5.10);
isInteger(7);

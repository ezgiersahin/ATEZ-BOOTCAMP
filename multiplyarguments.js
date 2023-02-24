var multiply = function () {
    var i, sum = 1;
    for (i = 0; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    return sum;
};
 var total = multiply(10, 5, 5);
console.log(total);



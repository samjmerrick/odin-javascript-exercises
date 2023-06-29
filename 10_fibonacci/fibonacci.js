const fibonacci = function(num) {
    if(num < 0) return "OOPS"; 
    let fib = [0, 1];
    // generate fibonnachi
    for(let i = 1; i < num; i++) {
        fib.push(fib[i] + fib[i -1]);
    };
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;

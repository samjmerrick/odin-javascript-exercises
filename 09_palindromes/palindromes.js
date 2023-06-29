const palindromes = function (str) {
    const lower = str.toLowerCase();
    const arr = lower.match(/[a-z0-9]/g);
    const length = arr.length;

    // Loop until the middle, check for match at opposite position
    for (let i = 0; i < (length / 2); i++) {
        if(arr[i] != arr[length - 1 - i]) { 
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

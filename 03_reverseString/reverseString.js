const reverseString = function(str) {
    //easy solution
    //return str.split('').reverse().join('');

    // loop solution
    let arr = []
    for (i = 1; i <= str.length; i++) {
        arr.push(str[str.length - i]);
    }
return arr.join('')
};


// Do not edit below this line
module.exports = reverseString;





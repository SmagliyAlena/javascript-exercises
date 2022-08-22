const name = ''

const str = "My name is " + name + ". How are you"
const s = `My name is ${name}. How are you`;

const repeatString = function(string, num) {

    //validate arguments
    if (num < 0) {
        return 'ERROR';
    }

    let result = '';
    let i = 0;
    while (i < num) {
        result += string;
        i++
    }


    return result;

};
//repeatString("hey",3)

// Do not edit below this line
module.exports = repeatString;

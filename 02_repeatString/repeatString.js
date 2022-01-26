const repeatString = function (string, times) {
    for (let i = 0; i <= 10; ++i) {
        if (times < 0) { return ('ERROR') }
        else { return (string.repeat(times)) }
    }
};
// Do not edit below this line
module.exports = repeatString;

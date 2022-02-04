const tomorrow = () => {
    var current = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
    return new Date(current.getTime() + 86400000);
}


module.exports = {
    tomorrow
}
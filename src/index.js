module.exports = function toReadable(number) {
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    let result = [];
    if (!number) result.push(numbers[number]);
    if (number >= 100) {
        result.push(numbers[Math.floor(number / 100)]);
        result.push("hundred");
        number %= 100;
    }

    if (number >= 20) {
        result.push(tens[Math.floor(number / 10) - 2]);
        number %= 10;
    }

    if (number >= 0 && !number % 10 == 0) {
        result.push(numbers[number]);
    }

    return result.join(" ");
};

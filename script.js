

//- 1 Verilmiş ədədlır siyahısındaki ədədlərin cəmini tapın qaytaran function

function sum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

let arr = [1, 2, 10, 3, 4, 5]

// console.log(sum(arr))



//- 2 Verilmiş arraydəki ən böyük ədədi tapın qaytaran function

function greatEded(arr) {

    let maxnumber = arr[0]


    for (i = 0; i < arr.length; i++) {
        if (maxnumber < arr[i]) {
            maxnumber = arr[i]
        }
    }
    return maxnumber
}

// console.log(greatEded(arr))


// - 3 Verilmiş ədədin rəqəmləri cəmini tapıb qaytaran function

function sumOfDigits(arr) {
    let remaider = 0;
    let sum = 0;
    while (arr != 0)
    {
        remaider = arr % 10;

        sum = sum + remaider;

        arr = (arr-remaider) / 10;
    }
    return sum;
}
// console.log(sumOfDigits(64))


// - 4 Verilmiş ədədlər siyahısındaki ən çox təkrarlanan ədədi tapıb qaytaran function
function findMostRepeatedNumber(numbers) {
    let frequency = [];
    let mostRepeatedNumber;
    let highestFrequency = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        frequency[number] = (frequency[number] || 0) + 1;
        if (frequency[number] > highestFrequency) {
            mostRepeatedNumber = number;
            highestFrequency = frequency[number];
        }
    }

    return mostRepeatedNumber;
}
let numbers = [1,2,2,1,1,2,2];
console.log(findMostRepeatedNumber(numbers));


var arrayNum = [12, 3, 4, 5, 6, 7, 11, 8, 10, 13];
var arrayString = ["hi", "How", "are", "you"];
var arrayPalindrom = ["wow", "madam", "food", "VEV"];
var dupArray = [1, 1, 1, 1, 2, 3, 4, 5, 4, 6, 7, 8, 6];

// Print odd numbers in an array

var oddNumArr = function () {
    arrayNum.forEach(element => {
        if (element % 2 != 0) {
            console.log(element);
        }
    });
}
oddNumArr();

// Convert all the strings to title caps in a string array
(function () {
    for (let i = 0; i < arrayString.length; i++) {
        arrayString[i] = arrayString[i].toLocaleUpperCase();
    }
    console.log(arrayString);
})();

// Sum of all numbers in an array
var sumOfAllNumber = function () {
    let sum = 0;
    for (let i = 0; i < arrayNum.length; i++) {
        sum = sum + arrayNum[i];
    }
    return sum;
}
console.log(`Sum of all numbers in an array ${sumOfAllNumber()}`);

// Return all the prime numbers in an array

var printPrimeNum = function () {
    let count = 0;
    let res = [];
    arrayNum.forEach(element => {

        for (let i = 1; i <= element; i++) {

            if (element % i == 0) {
                count++
                if (count > 3) {
                    break;
                }
            }
        }
        if (count == 2) {
            res.push(element);
        }
        count = 0;

    });
    return res;
}
console.log(`Return all the prime numbers in an array
${printPrimeNum()}`);

// Return all the palindromes in an array

console.log("Return all the palindromes in an array");

var printPalindrom = function () {
    var tempArr = [], resArr = [];
    arrayPalindrom.forEach(element => {
        element = element.split("");
        for (let i = 0; i < element.length; i++) {
            tempArr.push(element[element.length - (i + 1)]);

        }
        if (tempArr == element.join(",")) {
            resArr.push(element.join(","));
        }
        tempArr = [];
    });
    return resArr;
}
console.log(printPalindrom());

// Return median of two sorted arrays of the same size.
function getMedian(ar1, ar2, n) {
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;

    for (count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }

        else if (j == n) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j]) {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }

    return (m1 + m2) / 2;
}

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is " + getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");

// Remove duplicates from an array

var get_remove_duplicate_from_array = function () {
    var short_dup_array = dupArray.sort();
    var res_remove_dup_from_array = [];
    for (let i = 0; i < short_dup_array.length; i++) {
        count = 0;
        // 1,1,1,2,3,3,4,4,5,5,5,5
        for (let j = i + 1; j < short_dup_array.length; j++) {

            if (short_dup_array[i] == short_dup_array[j]) {
                count++;
            }
            else {

                break;
            }

        }
        res_remove_dup_from_array.push(short_dup_array[i]);
        i = i + count;


    }
    return res_remove_dup_from_array;
}

console.log(get_remove_duplicate_from_array());


// Rotate an array by k times

var arrayNum = [12, 3, 4, 5, 6, 7, 11, 8, 10, 13];
console.log(arrayNum);
var res_rotation_array = [];
var k_times = function (k) {

    for (var z = 0; z < k; z++) {
        var tempArr = [];
        tempArr.push(arrayNum[arrayNum.length - 1]);

        for (let i = 0; i < arrayNum.length - 1; i++) {
            tempArr.push(arrayNum[i]);
        }

        arrayNum = tempArr;
        res_rotation_array = tempArr;
    }
    return res_rotation_array
}

console.log(k_times(3));


// Print odd numbers in an array
var arrayString = ["hi", "How", "are", "you"];
var arrayNum = [12, 3, 4, 5, 6, 7, 11, 8, 10, 13];

var print_odd_in_array = arrayNum.filter(element => element % 2 != 0);
console.log(`Print odd numbers in an array ${print_odd_in_array}`);

// Convert all the strings to title caps in a string array

var convert_string_to_caps = arrayString.map(element => element.toLocaleUpperCase());
console.log(`Convert all the strings to title caps in a string array ${convert_string_to_caps}`);

// Sum of all numbers in an array
var sum_of_all_num_Array = arrayNum.reduce((a, b) => a + b, 0);
console.log(`Sum of all numbers in an array ${sum_of_all_num_Array}`);

// Return all the prime numbers in an array
var arrayNum = [12, 3, 2, 1, 0, 21, 4, 5, 6, 7, 11, 8, 10, 13];
var res_ret_primeNum = [];
var count = 0;
var return_all_primenum_in_array = () => {
    for (var i = 0; i < arrayNum.length; i++) {
        for (var j = 1; j <= arrayNum[i]; j++) {
            if (arrayNum[i] % j == 0) {
                count++;
            }
            if (count > 2) break;
        }
        if (count == 2) {
            res_ret_primeNum.push(arrayNum[i]);
        }
        count = 0
    };
    return res_ret_primeNum;
}

console.log(`Return all the prime numbers in an array ${return_all_primenum_in_array()}`);

// Return all the palindromes in an array
var ret_all_palindroms_Array = () =>{
var tempArr = [], resArr = [];
    arrayPalindrom.forEach(element => {
        element = element.split("");
        for (let i = 0; i < element.length; i++) {
            tempArr.push(element[element.length - (i + 1)]);

        }
        if (tempArr == element.join(",")) {
            resArr.push(element.join(""));
        }
        tempArr = [];
    });
    return resArr;
}

console.log(ret_all_palindroms_Array());
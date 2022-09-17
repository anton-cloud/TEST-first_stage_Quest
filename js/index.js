
// 1) Задан массив целых чисел. Написать функцию нахождения максимального элемента в массиве.

let arrayNumbers = [100, 25, 20, 15, 10, 5]

function getMaxElement(array) {
    const arrLength = array.length
    let maxElement = array[arrLength - 1]
    for (let i = 0; i < arrLength; i += 1) {
        array[i] > maxElement ? maxElement = array[i] : maxElement
    }
    return maxElement
}

// console.log(getMaxElement(arrayNumbers));

// 2) Реализовать функцию сортировки пузырьком

function bubbleSort(array) {
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            if (array[j] > array[j + 1]) {
                let result = array[j]
                array[j] = array[j + 1]
                array[j + 1] = result
            }
        }
    }
    return array
}

// console.log(bubbleSort(arrayNumbers));

// 3) ---

// 4) Задан упорядоченный по возрастанию массив.
// Реализовать алгоритм бинарного поиска для нахождения значения в массиве.
// Вернуть номер элемента или уведомить что такого элемента нет. 

function binarySearch(value, array) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    let position = -1;
    let found = false;
    let middle;
    while (found === false && firstIndex <= lastIndex) {
        middle = Math.floor((firstIndex + lastIndex) / 2);
        if (array[middle] == value) {
            found = true;
            position = middle;
        } else if (array[middle] > value) {
            lastIndex = middle - 1;
        } else {
            firstIndex = middle + 1;
        }
    }
    return position;
}

// console.log(binarySearch(2, [1, 7, 14, 21, 28, -28]));

// 5)---

// 6) Проверить является ли строка палиндромом.
function isPalindrome(text) {
    const lastIndex = text.length - 1
    for (let i = 0; i < text.length / 2; i += 1) {
        if (text[i] !== text[lastIndex - i]) {
            return false
        }
    }
    return true
}

// console.log(isPalindrome("казак"));
// console.log(isPalindrome("козак"));

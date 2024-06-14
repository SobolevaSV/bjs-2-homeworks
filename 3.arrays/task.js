'use strict'

// Задача 1. Сравнить массивы

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let result = arr1.every((value, index) => value === arr2[index]);
    return result;
}

// Задача 2. Фильтрация и преобразование массива

function getUsersNamesInAgeRange(users, gender) {
    let genderFilter = users.filter(users => users.gender === gender);
    if (genderFilter.length === 0) {
        return 0;
    }
    let totalAge = genderFilter.map(genderFilter => genderFilter.age).reduce((acc, age) => acc + age, 0);
    let result = totalAge / genderFilter.length;
    return result;
}
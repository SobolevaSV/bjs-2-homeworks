"use strict"

// Задача 1

function getArrayParams(...arr) {
  const min = Math.min(...arr); // минимальное значение массива
  const max = Math.max(...arr); // максимальное значение массива
  const sum = arr.reduce((a, b) => a + b); // сумма элементов массива
  const avg = parseFloat((sum / arr.length).toFixed(2)); // среднее значение массива с преобразованием
  return { min: min, max: max, avg: avg };
}

// Задача 2

function summElementsWorker(...arr) { // будет находить сумму элементов массива
  if (arr.length === 0) { // проверка массива на пустоту
    return 0;
  }
  const summ = arr.reduce((a, b) => a + b); // сумма элементов массива
  return summ;
}

function differenceMaxMinWorker(...arr) { // будет вычислять разницу максимального и минимального элементов
  if (arr.length === 0) { // проверка массива на пустоту
    return 0;
  }
  const minWorker = Math.min(...arr); // минимальное значение массива
  const maxWorker = Math.max(...arr); // максимальное значение массива
  const diff = maxWorker - minWorker; // разница между максимальным и минимальным значением
  return diff;
}

function differenceEvenOddWorker(...arr) { // будет вычислять разницу сумм чётных и нечётных элементов
  if (arr.length === 0) { // проверка массива на пустоту
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) { // перебираем массив для поиска четных и нечетных элементов
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; // сумма четных элементов
    }
    else {
      sumOddElement += arr[i]; // сумма нечетных элементов
    }
  }
  const diffEvenOdd = sumEvenElement - sumOddElement; // разница сумм четных и нечетных элементов
  return diffEvenOdd;
}

function averageEvenElementsWorker(...arr) { // будет вычислять среднее значение чётных элементов
  if (arr.length === 0) { // проверка массива на пустоту
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) { // перебираем массив для поиска четных элементов
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; // сумма четных элементов
      countEvenElement ++; // количество четных элементов
    }
  }
  const avgEvenElement = sumEvenElement / countEvenElement; // среднее значение четных элементов
  return avgEvenElement;
}

// Задача 3

function makeWork (arrOfArr, func) { // из массива данных и насадки будет возвращать максимальный результат функции насадки
  if (arrOfArr.length === 0) { // проверка массива на пустоту
    return 0;
  }
  let maxWorkerResult = -Infinity; 
  for (let i = 0; i < arrOfArr.length; i++) { // перебираем массив для поиска максимального значения результатов
  const result = func (...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult; // максимальное значение результатов
}
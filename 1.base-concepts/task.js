"use strict"

// Задача 1

function solveEquation(a, b, c) { // решает квадратное уравнение
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c; // дискриминант
  if (d < 0) {
    arr = [];
  }
  if (d === 0) {
    arr = [-b / (2*a)]; 
  }
  if (d > 0) {
    arr = [(-b + Math.sqrt(d))/(2*a), 
           (-b - Math.sqrt(d))/(2*a)];
  }  
  return arr; 
}

// Задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12; // преобразовываем годовую процентную ставку в месячную и в относительное значение
  let loan = amount - contribution; // тело кредита
  let monthPayment = loan * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1))); // ежемесячный платеж
  let totalLoan = monthPayment * countMonths; // общая сумма, которую придется заплатить клиенту
  let result = parseFloat(totalLoan.toFixed(2)); // преобразовываем результат до двух знаков после запятой и в число
  return result;
}
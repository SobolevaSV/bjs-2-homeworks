'use strict'

// Задача 1. Инкапсуляция студента

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {
        return;
    }
    this.marks.push(...marks); 
}

Student.prototype.getAverage = function () {
    if (!this.marks || !this.marks.length) {
        return 0;
    }
    const sumMarks = this.marks.reduce ((acc, mark) => acc + mark, 0);
    const avgMark = sumMarks / this.marks.length;
    return avgMark;
}

Student.prototype.exclude = function (reason) {
    delete this.subject
    delete this.marks;
    this.excluded = reason;
}
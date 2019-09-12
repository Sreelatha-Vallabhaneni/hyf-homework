//********************************* Student manager ************************************

const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.lastIndexOf(studentName, 5) !== -1) {
        return `Student ${studentName} is already in the class.`;
    }
    else if (studentName === 'queen') {
        return class07Students.push(studentName);
    }
    else if (studentName === '' || typeof studentName !== 'string') {
        return 'please enter a student name in order to string not a number'
    }
    else if (class07Students.length > 5) {
        return 'Cannot add more students to class 07.';
    }
    return class07Students.push(studentName);
}

function getNumberOfStudents() {
    return class07Students.length;
}

console.log(addStudentToClass('Sreelatha'));
console.log(addStudentToClass('benjamin'));
console.log(addStudentToClass('rasmus'));
console.log(addStudentToClass('christopher'));
console.log(addStudentToClass('nynne'));
console.log(addStudentToClass('rasmus'));
console.log(addStudentToClass('niels'));
console.log(addStudentToClass('queen'));
console.log(addStudentToClass(''));
console.log(addStudentToClass(9999));
console.log('Number of students: ' + getNumberOfStudents());
console.log(class07Students);
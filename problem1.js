function studentIntroduction(student) {
  if (
    typeof student !== 'object' ||
    student === null ||
    !student.name ||
    !student.age ||
    !student.course
  ) {
    return 'Invalid';
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

console.log(
  studentIntroduction({ name: 'John', age: 20, course: 'Computer Science' }),
);
console.log(
  studentIntroduction({ name: 'Alice', age: 22, course: 'Mathematics' }),
);
console.log(studentIntroduction({ name: 'Bob', age: 19, course: 'Physics' }));
console.log(studentIntroduction({ name: 'Eve', age: 21, course: 'Chemistry' }));
console.log(
  studentIntroduction({ name: 'Charlie', age: 23, course: 'Biology' }),
);

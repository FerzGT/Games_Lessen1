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
  
    if (this.marks !== undefined) {
      this.marks.push(...marks);
    };
}

Student.prototype.getAverage = function () {
 
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  return sum / this.marks.length;

}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

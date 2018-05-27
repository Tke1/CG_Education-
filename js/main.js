var teacherName = "Nikola Tesla";
var department = "Physics";
var rating = [3.5, 5.0, 1.0];
var rating2 = [3.0, 2.5, 1.0];


function getAverageRating(teacherRating) {
  var total = 0;
  for (var i = 0; i < teacherRating.length; i++) {
    total += teacherRating[i];
  }
  avgRating = parseFloat(total / teacherRating.length).toFixed(1);
  return avgRating;
}

/*console.log(getAverageRating(rating2));*/

function addTeacherRating(newRating, ratingArray) {
  ratingArray.push(newRating);
  return ratingArray;
}


function teacherReview(review) {
  var response = prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?");
  if (response > 0.0 && response < 5.0) {
    console.log(addTeacherRating(parseInt(response), rating2) + getAverageRating(rating2));
    alert("Thanks for you review!" + " " + teacherName + " " + "average rating is now " + getAverageRating(rating2));
  } else {
    console.log(prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?"));
  }
  return "Thank you";
}
console.log(teacherReview());

/*courses*/
var courses = [
  ["Intro to Design", "Department of Computer Science"],
  ["Intro to Physics", "Department of Physics"],
  ["Astrophysics", "Department of Physics"],
  ["Intro to Political Thought", "Department of Political Science"],
];

/*filter department*/
function filteredByDepartment(lists, filter) {
  for (var i = 0; i < lists.length; i++) {
    for (var j = 0; j < lists[i].length; j++) {
      if (lists[i][j] === filter) {
        console.log(lists[i][j]);
      }
    }
  }
}
filteredByDepartment(courses, "Department of Physics");

/*graduation year and month */

var gradYear = parseInt(prompt("Please enter college graduation year"));
var month = prompt("Please enter college graduation month");

function gradMonth() {
  if (month == "May" || month == "December") {
    return month;
  } else {
    month = prompt("Pleae enter college graduation month");
  }
}
console.log(gradMonth() + ", " + gradYear);

/* Welcome Student Message */
function welcomeCollegeStudent(studentsClass) {
  alert("Welcome" + " " + studentsClass);
}

function welcomeHsStudent(studentsClass) {
  alert("You're still a" + " " + studentsClass + " " + "in high school!")
}

function WelcomeStudentByClass(year) {
  switch (year) {
    case 2018:
      studentsClass = 'Senior';
      welcomeCollegeStudent(studentsClass);
      break;

    case 2019:
      studentsClass = 'Junior';
      welcomeCollegeStudent(studentsClass);
      break;

    case 2020:
      studentsClass = 'Sophomore';
      welcomeCollegeStudent(studentsClass);
      break;
    case 2021:
      studentsClass = 'Freshmen';
      welcomeCollegeStudent(studentsClass);

      break;

    case 2022:
      studentsClass = 'Senior';
      welcomeHsStudent(studentsClass);
      break;

    case 2023:
      studentsClass = 'Junior';
      welcomeHsStudent(studentsClass);

      break;

    case 2024:
      studentsClass = 'Sophomore';
      welcomeHsStudent(studentsClass);
      break;

    case 2025:
      studentsClass = 'Freshmen';
      welcomeHsStudent(studentsClass);
      break;
  }
}
WelcomeStudentByClass(gradYear);

/*Teacher Object*/
function Teacher(name, department, ratings) {
  this.name = name;
  this.department = department;
  this.ratings = ratings;
};

Teacher.prototype = {
  addTeacherRating: function(newRating) {
    this.ratings.push(newRating);
  },
  getAverageRating: function() {
    var total = 0;
    for (i = 0; i < this.ratings.length; i++) {
      total = total + this.ratings[i];
    }
    avgRating = parseFloat(total / this.ratings.length).toFixed(1);
    return avgRating;
  }
};

var teacher1 = new Teacher("Jack Sparrow", "Department of Piracy", [5.0, 5.0, 4.5]);
var teacher2 = new Teacher("Will Smith", "Department of Piracy", [4.2, 3.5, 5.0]);
var teacher3 = new Teacher("Dr. Who", "Department of Future", [5.0, 4.9, 5.0]);

teacher1.addTeacherRating();
teacher1.getAverageRating();
teacher2.addTeacherRating();
teacher2.getAverageRating();
teacher3.addTeacherRating();
teacher3.getAverageRating();

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

/*course object*/
function Course(name, department) {
  this.name = name;
  this.department = department;
}

var course1 = new Course('Intro to Design', 'Department of Computer Science');
var course2 = new Course('Intro to Physics', 'Department of Physics');
var course3 = new Course('Astrophysics', 'Department of Physics');
var course4 = new Course('Intro to Political Thought', 'Department of Political Science');

var courses = [
  course1,
  course2,
  course3,
  course4,
]
console.log(courses);

function filteredByDepartment(lists, filter) {
  for (var i = 0; i < lists.length; i++) {
    if (lists[i].department === filter) {
      console.log(lists[i].department);
    }
  }
}
filteredByDepartment(courses, "Department of Physics");

/*student object*/
function Student(name, major, email, avgGPA, studentCourses) {
  this.name = name;
  this.major = major;
  this.email = email;
  this.avgGPA = avgGPA;
  this.studentCourses = studentCourses;
};

Student.prototype = {
  addStudentCourse: function(addCourse) {
    this.studentCourses.push(addCourse);
  },
  changeMajor: function(newMajor) {
    this.major = newMajor;
  },
  dropStudentCourse: function(dropCourse) {
    for (var i = 0; i < this.studentCourses.length; i++) {
      if (dropCourse == this.studentCourses[i]) {
        delete this.studentCourses[i];
      }
    }
  },
};

var student1 = new Student('Nikola Tesla', 'Physics', 'nikola@cg.edu', 4.0, ['Calculus', 'Econ101']);
var student2 = new Student('Sally Smith', 'Computer Science', 'sally@cg.edu', 3.0, ['Physics', 'Computer Science']);
var student3 = new Student('Eddie Jones', 'Piracy', 'eddie@cg.edu', 3.5, ['Calculus', 'Econ101']);

student1.addStudentCourse("Intro to Design");
student1.changeMajor("Computer Science");
student1.dropStudentCourse("Econ101");

console.log(student1);

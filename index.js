//Student class to create a new student. Takes four parameters to create a student
class Student {
  constructor(number, firstName, lastName, score) {
    this.number = number;
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = score;
  }

  //method to add a new student to the student information table. Add as new table row at the end of the rows
  addStudent() {
    //creates the table head and table data elements for the new row
    let thNumber = document.createElement('th');
    thNumber.innerHTML = this.number;
    let tdFirstName = document.createElement('td');
    tdFirstName.innerHTML = this.firstName;
    let tdLastName = document.createElement('td');
    tdLastName.innerHTML = this.lastName;
    let tdScore = document.createElement('td');
    tdScore.innerHTML = `${this.score}%`;

    //adds the table head and table data elements to a new row and adds the row to the table. Executes clearItems function at the end
    let tr = document.createElement('tr');
    tr.append(thNumber);
    tr.append(tdFirstName);
    tr.append(tdLastName);
    tr.append(tdScore);
    document.querySelector('[data-tbody]').append(tr);
    clearItems();
  }
}

//queries the button with the submit id and adds an event listener to it. Prevents the default behavior of a form with the preventDefault method
document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  //if any of the items in the form are empty it adds the Please fill form completely text to a paragram on the form with the id of missingItems
  if (
    document.querySelector('#number').value == '' ||
    document.querySelector('#firstName').value == '' ||
    document.querySelector('#lastName').value == '' ||
    document.querySelector('#score').value == ''
  ) {
    document.querySelector('#missingItems').innerHTML =
      'Please fill form completely!';
  } else {
    //else it grabs the values from the items in the form
    let studentNumber = document.querySelector('#number').value;
    let studentFirstName = document.querySelector('#firstName').value;
    let studentLastName = document.querySelector('#lastName').value;
    let studentScore = document.querySelector('#score').value;
    //creates a new student using the values of the items in the for,
    let newStudent = new Student(
      studentNumber,
      studentFirstName,
      studentLastName,
      studentScore
    );
    //runs the addStudent method
    newStudent.addStudent();
    //sets the innerHTML to empty of the paragraph inside of the form with the id of missingItems
    document.querySelector('#missingItems').innerHTML = '';
  }
});

//This function clears the values inside the items in the form
function clearItems() {
  document.querySelector('#number').value = '';
  document.querySelector('#firstName').value = '';
  document.querySelector('#lastName').value = '';
  document.querySelector('#score').value = '';
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];

  constructor(private router: Router, private studentService: StudentService) { 
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  deleteStudent(student: Student){
    let result = confirm('Delete: [' + student.id + " " + student.firstName + " " + student.lastName + "] \nAre you sure?");
    if(result){
      this.studentService.deleteStudentById(student.id).subscribe(msg => {
        console.warn(msg);
        this.students.splice(this.students.indexOf(student), 1);
      });
      //alert("deleted: " + JSON.stringify(student));
    }
  }

  addStudent(){
    this.router.navigateByUrl('/create-student');
  }
}

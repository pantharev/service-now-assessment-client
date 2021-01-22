import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
  submitted: boolean = false;
  student: Student;
  
  constructor(private studentService: StudentService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: number = parseInt(params.get("id"));
      this.studentService.getStudentById(id).subscribe(student => {
        this.student = student;
        this.studentForm.setValue({firstName: student.firstName, lastName: student.lastName});
      });
    });
    
  }

  onSubmit(){
    this.submitted = true;

    if(this.studentForm.invalid) return;

    let firstName = this.studentForm.get("firstName").value;
    let lastName = this.studentForm.get("lastName").value;

    this.studentService.updateStudentById(this.student.id, {firstName: firstName, lastName: lastName})
      .subscribe(student => {
        console.warn(JSON.stringify(student));
        this.router.navigateByUrl("/");
      });
  }



}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  studentForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.submitted = true;
    if(this.studentForm.invalid) return;

    let firstName = this.studentForm.get("firstName").value;
    let lastName = this.studentForm.get("lastName").value;

    this.studentService.createStudent({firstName: firstName, lastName: lastName})
      .subscribe(student => {
        console.warn(JSON.stringify(student));
        this.router.navigateByUrl("/");
      });
  }

}

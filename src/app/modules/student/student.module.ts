import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';


@NgModule({
  declarations: [StudentComponent, CreateStudentComponent, EditStudentComponent, ViewStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class StudentModule { }

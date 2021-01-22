import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TokenMessage } from '../models/token-message.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private api = environment.apiURL;

  constructor(private http: HttpClient) { }

  public createStudent(student: Student): Observable<Student>{
    return <Observable<Student>>this.http.post(`${this.api}/students`,student);
  }

  public getStudents(): Observable<Student[]>{
    return <Observable<Student[]>>this.http.get(`${this.api}/students`);
  }

  public getStudentById(id: number): Observable<Student> {
    return <Observable<Student>>this.http.get(`${this.api}/students/${id}`);
  }

  public updateStudentById(id: number, student: Student){
    return this.http.put(`${this.api}/students/${id}`, student);
  }

  public deleteStudentById(id: number): Observable<any>{
    return this.http.delete(`${this.api}/students/${id}`);
  }

  public sendToken(token: string): Observable<TokenMessage>{
    return <Observable<TokenMessage>>this.http.post(`${this.api}/validate_token`, {recaptcha: token});
  }
}

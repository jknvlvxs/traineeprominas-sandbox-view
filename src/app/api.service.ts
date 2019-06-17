import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from 'src/model/user';
import { Teacher } from 'src/model/teacher';
import { Course } from 'src/model/course';
import { Student } from 'src/model/student';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}JSON/user`)
      .pipe(
        tap(users => console.log('leu os usuários')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${apiUrl}JSON/teacher`)
      .pipe(
        tap(teachers => console.log('leu os professores')),
        catchError(this.handleError('getTeachers', []))
      );
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${apiUrl}JSON/course`)
      .pipe(
        tap(courses => console.log('leu os cursos')),
        catchError(this.handleError('getCourses', []))
      );
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${apiUrl}JSON/student`)
      .pipe(
        tap(students => console.log('leu os estudantes')),
        catchError(this.handleError('getStudents', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${apiUrl}JSON/user${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(apiUrl, user, httpOptions).pipe(
      tap((user: User) => console.log(`adicionou o usuário com w/ id=${user.id}`)),
      catchError(this.handleError<User>('postUser'))
    );
  }

  putUser(id, user): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id): Observable<User> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

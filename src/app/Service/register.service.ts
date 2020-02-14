import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  baseUrl='http://localhost:3000'
  postRegistertation(register):Observable<Register>{
   return this.http.post<Register>( `${this.baseUrl}/register/post1`,register)
  }
}

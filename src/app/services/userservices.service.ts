import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http:HttpClient) { }

  urlApi = environment.apiURL + 'comments/'

  getUsersAll():Observable<Users[]>{
    return this.http.get<Users[]>(this.urlApi);
  }

  postUser(usuario : Users):Observable<Users>{
    return this.http.post<Users>(this.urlApi, usuario);
  }
  
}


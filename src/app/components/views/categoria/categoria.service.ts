import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment.prod';
import { Categoria } from './categoria.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

    findAll():Observable<Categoria[]> {
      const url = `${this.baseUrl}/categorias`
      return this.http.get<Categoria[]>(url)
    }

  }
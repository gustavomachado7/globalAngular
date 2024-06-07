import { Injectable } from '@angular/core';
import { Ocean } from '../interfaces/Ocean';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OceanService {
  private oceansUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/index.html';
  constructor(private http: HttpClient) {}

  oceans: Ocean[] = [];

  listar(): Observable<Ocean[]> {
    return this.http.get<Ocean[]>(this.oceansUrl) as Observable<Ocean[]>;
  }
}

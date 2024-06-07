import { Ocean } from './../interfaces/Ocean';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OceanService {
  private oceansUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?especie=Tartaruga-verde&phMin=8&pagina=1&qtde=20';
  constructor(private http: HttpClient) {}

  oceans: Ocean[] = [];

  listar(): Observable<Ocean[]> {
    return this.http.get<Ocean[]>(this.oceansUrl) as Observable<Ocean[]>;
  }

  adicionar(ocean: Ocean) {
    this.oceans.push(ocean);
  }

}

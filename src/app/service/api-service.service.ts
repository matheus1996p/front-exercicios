import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getVotosValidos(totalEleitores: number, validos: number){
    let params = new HttpParams()
        .set('totalEleitores', totalEleitores)
        .set('validos', validos)
    return this.http.get(`${environment.apiUrl}/exercicio1/votosValidos`, {params: params})
  }

  getVotosBrancos(totalEleitores: number, brancos: number){
    let params = new HttpParams()
        .set('totalEleitores', totalEleitores)
        .set('brancos', brancos)
    return this.http.get(`${environment.apiUrl}/exercicio1/votosBrancos`, {params: params})
  }

  getVotosNulos(totalEleitores: number, nulos: number){
    let params = new HttpParams()
        .set('totalEleitores', totalEleitores)
        .set('nulos', nulos)
    return this.http.get(`${environment.apiUrl}/exercicio1/votosNulos`, {params: params})
  }

}

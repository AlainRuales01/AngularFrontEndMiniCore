import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractApiService {
  //readonly contractApiURL = "https://localhost:44336/MiniCore";
  readonly contractApiURL = "http://minicoreapi-001-site1.atempurl.com/MiniCore";

  constructor(private http:HttpClient) { }

  getContractsByDate(fechaInicio:Date, fechaFin:Date):Observable<any[]>{
    return this.http.get<any>(this.contractApiURL + `?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }
  getContracts():Observable<any[]>{
    return this.http.get<any>(this.contractApiURL);
  }
}

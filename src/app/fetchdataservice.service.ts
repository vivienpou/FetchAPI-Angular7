import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'text/html',
    'responseType': 'text'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FetchdataserviceService {

  constructor(private service: HttpClient) {}

  getData():Observable<any> {
    return this.service.get<any>('https://prod.geev.fr/alive',{observe:'response'})
  }
}


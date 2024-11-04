import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Coffee } from './coffee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  
  private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo3.json';
  
  constructor(private http: HttpClient) { }

  getAllCoffees(): Observable<Coffee[]> {
    console.log(this.apiUrl)
    return this.http.get<Coffee[]>(this.apiUrl);
  }

}

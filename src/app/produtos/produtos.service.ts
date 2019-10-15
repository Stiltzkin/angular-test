import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private http: Http,
  ) { }

  testeApi(){
    return this.http.get('http://spakimail.azurewebsites.net/api/Product');
  }
}

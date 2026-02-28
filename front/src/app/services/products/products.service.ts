import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:5000/api/productos';
  constructor(private http: HttpClient ) { }
  getProducts() {
    return this.http.get(this.apiUrl);
  }
  ngOnInit() {
    this.getProducts().subscribe(data => {
      console.log(data);
    }); 
  }
}

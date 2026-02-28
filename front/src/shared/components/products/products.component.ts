import { Component } from '@angular/core';
import { ProductsService } from '../../../app/services/products/products.service';

import { CommonModule } from '@angular/common';
interface Product {
  nombre_producto: string;
  precio: number;
  stock: number;
  estado: boolean;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [];
  cols: any[] = []; 
  constructor(private productsService: ProductsService) { }
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (data: any) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
  getStatus(status: boolean): string {
    return status ? 'Available' : 'Unavailable';
  }
}


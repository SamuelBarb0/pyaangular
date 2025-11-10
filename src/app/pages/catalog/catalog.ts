import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product, Category, PriceRange } from '../../models/product.model';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: Category = 'all';
  selectedPriceRange: PriceRange = 'all';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filterProducts();
    });
  }

  filterProducts() {
    this.productService.filterProducts(this.selectedCategory, this.selectedPriceRange)
      .subscribe(products => {
        this.filteredProducts = products;
      });
  }

  onCategoryChange() {
    this.filterProducts();
  }

  onPriceChange() {
    this.filterProducts();
  }

  formatPrice(price: number): string {
    return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
  }
}

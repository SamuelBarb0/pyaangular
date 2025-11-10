import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  featuredProducts: Product[] = [];
  currentImageIndex = 0;
  carouselImages = [
    'assets/images/inicio1.jpeg',
    'assets/images/Inicio2.png'
  ];
  carouselInterval: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadFeaturedProducts();
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  loadFeaturedProducts() {
    this.productService.getFeaturedProducts(3).subscribe(products => {
      this.featuredProducts = products;
    });
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
    }, 5000);
  }

  formatPrice(price: number): string {
    return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
  }
}

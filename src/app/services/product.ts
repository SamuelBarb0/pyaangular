import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, Category, PriceRange } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'assets/products.json';
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductBySlug(slug: string): Observable<Product | undefined> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map(products => products.find(p => p.slug === slug))
    );
  }

  getFeaturedProducts(limit: number = 3): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map(products => products.slice(0, limit))
    );
  }

  filterProducts(
    category: Category = 'all',
    priceRange: PriceRange = 'all'
  ): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map(products => {
        return products.filter(product => {
          const categoryMatch = category === 'all' || product.categoria === category;
          const priceMatch = priceRange === 'all' || this.isPriceInRange(product.precio, priceRange);
          return categoryMatch && priceMatch;
        });
      })
    );
  }

  private isPriceInRange(price: number, range: PriceRange): boolean {
    const priceInThousands = price / 1000;
    switch (range) {
      case '0-50':
        return priceInThousands >= 0 && priceInThousands <= 50;
      case '50-100':
        return priceInThousands > 50 && priceInThousands <= 100;
      case '100-500':
        return priceInThousands > 100 && priceInThousands <= 500;
      default:
        return true;
    }
  }
}

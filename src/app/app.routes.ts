import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CatalogComponent } from './pages/catalog/catalog';
import { ProductDetailComponent } from './pages/product-detail/product-detail';
import { AboutComponent } from './pages/about/about';
import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogComponent },
  { path: 'producto/:slug', component: ProductDetailComponent },
  { path: 'quienes-somos', component: AboutComponent },
  { path: 'metodos-pago', component: PaymentMethodsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

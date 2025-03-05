import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InsuranceFormComponent } from './components/insurance-form/insurance-form.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { DriverFormComponent } from './components/driver-form/driver-form.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'insurance-form', component: InsuranceFormComponent },
  { path: 'vehicle-form', component: VehicleFormComponent },
  { path: 'driver-form', component: DriverFormComponent },
  { path: 'quote-details', component: QuoteDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

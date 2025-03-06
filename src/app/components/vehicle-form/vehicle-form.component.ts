import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { QuoteService } from '../../services/quote.service';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../models/insurance-data.model';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatSelectModule, RouterModule, FormsModule, HttpClientModule, NgFor, NgIf],
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  vehicles: Vehicle[] = [];
  vehicleYears: string[] = [];
  vehicleMakes: { brand: string, models: string[] }[] = [];
  numberOfVehicles: number | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private insuranceService: QuoteService, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.numberOfVehicles = this.insuranceService.getVehicleCount() || 1;
      this.vehicles = Array.from({ length: this.numberOfVehicles }, () => ({ year: '', make: '', model: '', hasLoan: false }));
    });
    this.getVehicleDetails();
  }

  getVehicleDetails() {
    this.http.get<any>('assets/mock-vehicle-details.json').subscribe(data => {
      this.vehicleYears = data.years;
      this.vehicleMakes = data.makes;
    });
  }

  getModels(make: string): string[] {
    const selectedMake = this.vehicleMakes.find(m => m.brand === make);
    return selectedMake ? selectedMake.models : [];
  }

  addVehicles() {
    this.vehicles.forEach(vehicle => this.insuranceService.addVehicle(vehicle));
    this.router.navigate(['/driver-form']);
  }
}
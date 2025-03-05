import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { QuoteService } from '../../services/quote.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatSelectModule, RouterModule, FormsModule],
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent {
  vehicle = { year: '', make: '', hasLoan: false };

  constructor(private router: Router, private insuranceService: QuoteService) {}

  addVehicle() {
    this.insuranceService.addVehicle(this.vehicle);
    this.router.navigate(['/driver-form']);
  }
}

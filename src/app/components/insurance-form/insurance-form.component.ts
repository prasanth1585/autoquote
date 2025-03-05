import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { QuoteService } from '../../services/quote.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insurance-form',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, RouterModule, FormsModule],
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent {
  constructor(private router: Router, private insuranceService: QuoteService) {}

  setInsurance(status: boolean) {
    this.insuranceService.setInsuranceStatus(status);
  }

  setVehicleCount(count: number) {
    this.insuranceService.setVehicleCount(count);
    this.router.navigate(['/vehicle-form']);
  }
}

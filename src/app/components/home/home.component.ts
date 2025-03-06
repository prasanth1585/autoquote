import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { QuoteService } from '../../services/quote.service';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule, FormsModule, MatSelectModule, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  zipCode: string = '';
  zipCodeError: boolean = false;

  validateZipCode() {
    this.zipCodeError = !/^[0-9]*$/.test(this.zipCode);
  }
  constructor(private router: Router, private insuranceService: QuoteService) {}

  startQuote() {
    this.insuranceService.clearInsuranceData();
    this.insuranceService.setZipCode(this.zipCode);
    this.router.navigate(['/insurance-form']);
  }
}

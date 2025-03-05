import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { QuoteService } from '../../services/quote.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-driver-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule, FormsModule],
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent {
  driver = { firstName: '', lastName: '', dob: '', address: '' };

  constructor(private router: Router, private insuranceService: QuoteService) {}

  addDriver() {
    this.insuranceService.addDriver(this.driver);
    this.router.navigate(['/quote-details']);
  }
}

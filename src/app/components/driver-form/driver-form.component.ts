import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { QuoteService } from '../../services/quote.service';
import { FormsModule } from '@angular/forms';
import { Driver } from '../../models/insurance-data.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-driver-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule, FormsModule, NgFor],
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private quoteService: QuoteService, private router: Router) {}

  ngOnInit() {
    this.drivers = this.quoteService.getQuote().drivers;
  }

  addDrivers() {
    this.drivers.forEach(driver => this.quoteService.addDriver(driver));
    this.router.navigate(['/quote-details']);
  }
}

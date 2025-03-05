import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { QuoteService } from '../../services/quote.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-quote-details',
  standalone: true,
  imports: [MatButtonModule, RouterModule, NgFor],
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  quote: any;

  constructor(private insuranceService: QuoteService) {}

  ngOnInit() {
    this.quote = this.insuranceService.getQuote();
  }
}
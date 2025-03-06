import { TestBed } from '@angular/core/testing';
import { QuoteService } from './quote.service';
import { InsuranceData, Vehicle, Driver } from '../models/insurance-data.model';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [QuoteService]
    });
    service = TestBed.inject(QuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set ZIP Code', () => {
    service.setZipCode('12345');
    expect(service.getQuote().zipCode).toBe('12345');
  });

  it('should set Insurance Status', () => {
    service.setInsuranceStatus(true);
    expect(service.getQuote().hasInsurance).toBe(true);
  });

  it('should set Vehicle Count', () => {
    service.setVehicleCount(2);
    expect(service.getQuote().vehicleCount).toBe(2);
  });

  it('should add a vehicle', () => {
    const vehicle: Vehicle = { year: '2020', make: 'Toyota', model: 'Camry', hasLoan: false };
    service.addVehicle(vehicle);
    expect(service.getQuote().vehicles.length).toBe(1);
    expect(service.getQuote().vehicles[0]).toEqual(vehicle);
  });

  it('should add a driver', () => {
    const driver: Driver = { firstName: 'John', lastName: 'Doe', dob: '1990-01-01', address: '123 Main St' };
    service.addDriver(driver);
    expect(service.getQuote().drivers.length).toBe(1);
    expect(service.getQuote().drivers[0]).toEqual(driver);
  });

  it('should calculate premium', () => {
    service.setVehicleCount(2);
    service.setInsuranceStatus(false);
    service.calculatePremium();
    expect(service.getQuote().estimatedPremium).toBe(170); // Base rate 100 + 20 for extra vehicle + 50 for no insurance
  });

  it('should clear insurance data', () => {
    service.setZipCode('12345');
    service.setInsuranceStatus(true);
    service.setVehicleCount(2);
    const vehicle: Vehicle = { year: '2020', make: 'Toyota', model: 'Camry', hasLoan: false };
    service.addVehicle(vehicle);
    const driver: Driver = { firstName: 'John', lastName: 'Doe', dob: '1990-01-01', address: '123 Main St' };
    service.addDriver(driver);

    service.clearInsuranceData();
    const quote = service.getQuote();
    expect(quote.zipCode).toBe('');
    expect(quote.hasInsurance).toBeNull();
    expect(quote.vehicleCount).toBe(0);
    expect(quote.vehicles.length).toBe(0);
    expect(quote.drivers.length).toBe(0);
    expect(quote.estimatedPremium).toBe(0);
  });
});
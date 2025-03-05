import { Injectable } from '@angular/core';
import { Driver, InsuranceData, Vehicle } from '../models/insurance-data.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private insuranceData: InsuranceData = {
    zipCode: '',
    hasInsurance: null,
    vehicleCount: 0,
    vehicles: [],
    drivers: [],
    estimatedPremium: 0,
  };

  // ✅ Set ZIP Code
  setZipCode(zip: string) {
    this.insuranceData.zipCode = zip;
  }

  // ✅ Set Insurance Status
  setInsuranceStatus(status: boolean) {
    this.insuranceData.hasInsurance = status;
  }

  // ✅ Set Vehicle Count
  setVehicleCount(count: number) {
    this.insuranceData.vehicleCount = count;
  }

  // ✅ Add Vehicle
  addVehicle(vehicle: Vehicle) {
    console.log('Adding Vehicle:', vehicle);
    this.insuranceData.vehicles.push(vehicle);
  }

  // ✅ Add Driver
  addDriver(driver: Driver) {
    console.log('Adding Driver:', driver);
    this.insuranceData.drivers.push(driver);
  }

  // ✅ Calculate Insurance Premium
  calculatePremium() {
    let baseRate = 100;

    // Adjust premium based on number of vehicles
    if (this.insuranceData.vehicleCount > 1) {
      baseRate += 20 * (this.insuranceData.vehicleCount - 1);
    }

    // Increase premium if the user doesn't have prior insurance
    if (!this.insuranceData.hasInsurance) {
      baseRate += 50;
    }

    this.insuranceData.estimatedPremium = baseRate;
  }

  // ✅ Retrieve Quote Data
  getQuote(): InsuranceData {
    this.calculatePremium();
    return this.insuranceData;
  }
}

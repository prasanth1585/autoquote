import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private insuranceData: any = {
    zipCode: '',
    hasInsurance: null,
    vehicleCount: 0,
    vehicles: [],
    drivers: [],
    estimatedPremium: 0,
  };

  setZipCode(zip: string) {
    this.insuranceData.zipCode = zip;
  }

  setInsuranceStatus(status: boolean) {
    this.insuranceData.hasInsurance = status;
  }

  setVehicleCount(count: number) {
    this.insuranceData.vehicleCount = count;
  }

  addVehicle(vehicle: any) {
    this.insuranceData.vehicles.push(vehicle);
  }

  addDriver(driver: any) {
    this.insuranceData.drivers.push(driver);
  }

  calculatePremium() {
    let baseRate = 100;
    if (this.insuranceData.vehicleCount > 1) {
      baseRate += 20 * (this.insuranceData.vehicleCount - 1);
    }
    if (!this.insuranceData.hasInsurance) {
      baseRate += 50;
    }
    this.insuranceData.estimatedPremium = baseRate;
  }

  getQuote() {
    this.calculatePremium();
    return this.insuranceData;
  }
}

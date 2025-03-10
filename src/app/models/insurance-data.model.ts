export interface Driver {
    firstName: string;
    lastName: string;
    dob: string;
    address: string;
  }
  
  export interface Vehicle {
    year: string;
    make: string;
    model: string;
    hasLoan: boolean;
  }
  
  export interface InsuranceData {
    zipCode: string;
    hasInsurance: boolean | null;
    vehicleCount: number;
    driverCount: number;
    vehicles: Vehicle[];
    drivers: Driver[];
    estimatedPremium: number;
  }
  
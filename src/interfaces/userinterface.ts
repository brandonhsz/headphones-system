
export interface IUser {
  name: string;
  employeeId: string;
  description: string;
  serialNumber: string;
  campaign: string;
  branch: string;
  headPhone: {
    serialNumber: string;
    description: string;
    active: boolean;
    type: string;
  };
} 
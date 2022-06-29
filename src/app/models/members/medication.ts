export interface Medication {
  name: string;
  unit: string;
  requirement: boolean;
  requirement_quantity: number;
  morning: number;
  midday: number;
  evening: number;
  night: number;
}
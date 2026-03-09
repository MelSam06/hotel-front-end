export interface Payment {
  paymentId: number | null;
  amount: number;
  paymentMethod: string;
  customerId: number | undefined;
}

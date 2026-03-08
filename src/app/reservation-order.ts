export interface ReservationOrder {
  resOrderId: number | null;
  customerId: number | undefined;
  paymentId: number | undefined | null;
  orderDate: string;
}

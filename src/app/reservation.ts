export interface Reservation {
  resId: number | null;
  resOrderId: number | null;
  roomNumber: number;
  checkInDate: string;
  checkOutDate: string;
  price: number;
}

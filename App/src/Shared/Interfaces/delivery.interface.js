export interface DeliveryInterface {
  support_address: string;
  deposit_address: string;
  supported: string;
  recipient: string;
  express: Boolean;
  deposit_availability_start: Date;
  deposit_availability_end: Date;
  quantity: Number;
  options: DeliveryOptionsInterface[];
}

export interface DeliveryOptionsInterface {
  type: string;
  l: Number;
  ll: Number;
  h: Number;
  weight: Number;
  comments: string;
}

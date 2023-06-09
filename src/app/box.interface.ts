export interface Box {
    size: number;
    contents: string;
    shippingLabel: string;
    recipient?: string;
    weight: number;
  }
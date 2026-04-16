export type Vendor = {
  vendor_id: string;
  name: string;
  slug: string;
  genre: string;
  phone: string;
  address: string;
  rating: number;
  open_time: string;
  close_time: string;
  banner_url: string;
  is_active: boolean;
};

export type Product = {
  product_id: string;
  vendor_id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  image_url: string;
  is_active: boolean;
};

export type OrderPayload = {
  user_id: string;
  vendor_id: string;
  items: Array<{ product_id: string; qty: number; price: number }>;
  payment_mode: "COD" | "UPI" | "CARD";
  delivery_fee: number;
};

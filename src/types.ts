export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  cover: string;
  description: string;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface Order {
  name: string;
  email: string;
  address: string;
  phone: string;
  items: CartItem[];
  total: number;
  discount: number;
  finalTotal: number;
}
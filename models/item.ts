import { Category } from './category'
import { Base } from './base'

export interface ItemCreate<T = number> {
  title: string;
  description: string;
  availability: number;
  sku: string;
  code: string;
  rec_price: number;
  attrs: Record<string, string>;
  stock: number;
  category: T[];
}

export interface Item extends ItemCreate<Category> {
  id: string;
  images: {
    id: number;
    image_url: string;
    created_at: string;
    item: string;
  }[],
  category: Category[];
  received_at: string;
  qr_code: string
}

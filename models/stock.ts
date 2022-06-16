import { Base } from './base'

export interface StockCreate {
  title: string;
  description: string;
  is_active: boolean;
  capacity: number;
  type: number;
  managers: number[];
}

export interface Stock  extends  StockCreate, Base { }
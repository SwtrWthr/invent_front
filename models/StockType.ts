import { Base } from './base'

export interface StockTypeCreate {
  title: string
  description: string
}

export interface StockType extends StockTypeCreate, Base {}
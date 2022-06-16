import { BaseApi } from './base-api'
import { Stock, StockCreate } from '../models/stock'
import { ApiStocks } from './api-const'

export class StockApi extends BaseApi<StockCreate, Stock> {
  constructor() {
    super(ApiStocks)
  }
}

export const stockApi = new StockApi();
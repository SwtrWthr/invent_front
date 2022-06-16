import { BaseApi } from './base-api'
import { ApiItems } from './api-const'
import { Item, ItemCreate } from '../models/item'

export class ItemApi extends BaseApi<ItemCreate, Item> {
  constructor() {
    super(ApiItems)
  }
}


export const itemApi = new ItemApi();
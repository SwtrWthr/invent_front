import { BaseApi } from './base-api'
import { Category, CategoryCreate } from '../models/category'
import { ApiItemCategories } from './api-const'

export class CategoryApi extends BaseApi<CategoryCreate, Category> {
  constructor() {
    super(ApiItemCategories)
  }
}

export const categoryApi = new CategoryApi()

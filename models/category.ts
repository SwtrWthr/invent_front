import { Base } from './base'

export interface CategoryCreate {
  title: string;
  description: string;
}

export interface Category extends CategoryCreate, Base {}
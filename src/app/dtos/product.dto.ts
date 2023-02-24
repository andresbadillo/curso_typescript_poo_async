import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

export interface CreatedProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
};

export interface UpdateProductDto extends Partial<CreatedProductDto> {};

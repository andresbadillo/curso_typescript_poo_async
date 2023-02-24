import axios from "axios";

import { Category } from '../models/category.model'
import { Product } from '../models/product.model'
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService<TypleClass> {

  constructor(
    protected url: string
  ){}

  async getAll(): Promise<TypleClass[]> {
    const { data } = await axios.get<TypleClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO): Promise<Product> {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async() => {

  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const url2 = 'https://api.escuelajs.co/api/v1/categories';

  const productService = new BaseHttpService<Product>(url1);
  const rta1 = await productService.getAll();
  console.log('Productos:');
  console.log(rta1.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'El mejor título',
    description: 'La mejor descripción',
  });

  const categoryService = new BaseHttpService<Category>(url2);
  const rta2 = await categoryService.getAll();
  console.log('Categorias:');
  console.log(rta2.length);

})();



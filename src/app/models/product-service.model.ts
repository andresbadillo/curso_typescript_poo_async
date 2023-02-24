import { Product } from "./product.model";
import { CreatedProductDto, UpdateProductDto } from "../dtos/product.dto";

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>;
  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
  create(dto: CreatedProductDto): Product | Promise<Product>;
  findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>;
}

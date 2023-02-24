import { ProductMemoryService } from './services/product-memory.service'

const productService = new ProductMemoryService();

productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'Gran producto',
  categoryId: 11,
  images: []
});

const products = productService.getAll();
const productId = products[0].id;
console.log(products[0]);

productService.update(productId, {
  title: 'El mejor producto',
  description: 'No encontrarias algo mejor',
});

const rta = productService.findOne(productId);
console.log(rta);


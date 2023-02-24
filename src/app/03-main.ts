import { ProductHttpService } from './services/product-http.service';

(async() => {

  const productService = new ProductHttpService();

  try {
    console.log('--'.repeat(5));

    console.log('getAll');
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));

    console.log('update');
    const productId = products[0].id;
    await productService.update(productId, {
      price: 1250,
      title: 'Ahora este producto tiene un mejor título',
      description: 'Ahora este producto tiene una mejor descripción'
    });

    console.log('findOne');
    const product = await productService.findOne(productId);
    console.log(product);

  } catch (error) {
    console.error(error);
  }

})();



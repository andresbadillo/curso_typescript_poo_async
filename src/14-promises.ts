
import axios from "axios";

(async() => {

  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise;
  }

  function getProducts() {
     const promise = axios.get('https://api.escuelajs.co/api/v1/products');
     return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
 }

  console.log('__'.repeat(5));
  const rta = await delay(3000);
  console.log(rta);

  console.log('__'.repeat(5));
  const products = await getProducts();
  // console.log(products.data);

  const allProducts = await getProductsAsync();
  console.log(allProducts);

})();

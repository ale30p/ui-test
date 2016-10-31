class ProductController {
  constructor() {
    'ngInject';
    this.name = 'ml.product';
    this.product = {
      id: this.uaProductId,
      title: 'Ipad Mini Apple 16 Gb Wifi Led 7.9',
      price: 4800,
      imageUrl: 'http://cdn.macrumors.com/article-new/2013/09/ipadmini3.jpg',
      description: 'El iPad mini siempre ha sido pequeño, rápido y muy poderoso. Pero ahora es aún mejor. Incluye la tecnología Touch ID. Sigue siendo pequeño, pero se siente grande al usarlo.'
    }
  }
}

export default ProductController;

class OrderController {
  constructor() {
    'ngInject';
    this.name = 'ml.order';
    this.product = this.uaProduct;
    this.init();
  }

  init() {
    this.quantity = '1';
    this.payments = '12';
  }
}

export default OrderController;

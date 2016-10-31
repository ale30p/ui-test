import template from './product.html';
import controller from './product.controller';
import './product.scss';

let productComponent = {
  bindings: {
    uaProductId: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default productComponent;

import template from './productDescription.html';
import controller from './productDescription.controller';
import './productDescription.scss';

let productDescriptionComponent = {
  bindings: {
    uaProduct: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default productDescriptionComponent;

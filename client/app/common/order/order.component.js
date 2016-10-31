import template from './order.html';
import controller from './order.controller';
import './order.scss';

let orderComponent = {
  bindings: {
    uaProduct: '<'
  },
  template,
  controller,
  controllerAs: 'order'
};

export default orderComponent;

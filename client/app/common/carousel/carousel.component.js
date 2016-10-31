import template from './carousel.html';
import controller from './carousel.controller';
import './carousel.scss';

let carouselComponent = {
  bindings: {
    uaImages: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default carouselComponent;

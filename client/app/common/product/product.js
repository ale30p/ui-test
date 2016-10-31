import angular from 'angular';
import productComponent from './product.component';

let productModule = angular.module('ml.app.product', [])
  .component('mlProduct', productComponent);

export default productModule;

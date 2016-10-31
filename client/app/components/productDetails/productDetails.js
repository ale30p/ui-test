import angular from 'angular';
import productDetailsComponent from './productDetails.component';

let productDetailsModule = angular.module('ml.app.productDetails', [])
  .component('mlProductDetails', productDetailsComponent);

export default productDetailsModule;

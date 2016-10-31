import angular from 'angular';
import productDescriptionComponent from './productDescription.component';

let productDescriptionModule = angular.module('ml.app.productDescription', [])
  .component('mlProductDescription', productDescriptionComponent);

export default productDescriptionModule;

import angular           from 'angular';

import ProductDetails    from './productDetails/productDetails';

let componentModule = angular.module('app.component',[
  ProductDetails.name
]);

export default componentModule;

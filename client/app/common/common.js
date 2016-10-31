import angular                 from 'angular';

import Carousel                from './carousel/carousel';
import Order                   from './order/order';
import Page                    from './page/page';
import Product                 from './product/product';
import ProductDescription      from './productDescription/productDescription';
import QuestionsAnswers        from './questionsAnswers/questionsAnswers';

let commonModule = angular.module('app.common',[
  Carousel.name,
  Order.name,
  Page.name,
  Product.name,
  ProductDescription.name,
  QuestionsAnswers.name
]);

export default commonModule;

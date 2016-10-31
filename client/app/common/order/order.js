import angular from 'angular';
import orderComponent from './order.component';

let orderModule = angular.module('ml.app.order', [])
  .component('mlOrder', orderComponent);

export default orderModule;

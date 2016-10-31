import angular from 'angular';
import pageComponent from './page.component';

let pageModule = angular.module('ml.app.page', [])
  .component('mlPage', pageComponent);

export default pageModule;

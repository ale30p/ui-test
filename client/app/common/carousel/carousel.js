import angular from 'angular';
import carouselComponent from './carousel.component';

let carouselModule = angular.module('ml.app.carousel', [])
  .component('mlCarousel', carouselComponent);

export default carouselModule;

import angular from 'angular';

/*eslint-disable no-unused-vars */
import ngComponentRouter from '@angular/router/angular1/angular_1_router.js';
//import chicoJs from 'chico.js';
import 'chico.css';
/*eslint-enable no-unused-vars */

//App components
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

let App = angular.module('app', [
    "ngComponentRouter",
    //"chicoJs",
    Common.name,
    Components.name
  ])
  .component('app', AppComponent)
  .value('$routerRootComponent', 'app');

angular.element(document).ready(function () {
  angular.bootstrap(document.body, [ App.name ],{
    strictDi: true
  })
});

export default App;

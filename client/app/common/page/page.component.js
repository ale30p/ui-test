import template from './page.html';
import controller from './page.controller';
import './page.scss';

let pageComponent = {
 transclude: {
    header: '?mlHeader',
    content: '?mlContent'
  },
  template,
  controller,
  controllerAs: 'page'
};

export default pageComponent;

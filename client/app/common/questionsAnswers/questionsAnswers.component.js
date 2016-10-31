import template from './questionsAnswers.html';
import controller from './questionsAnswers.controller';
import './questionsAnswers.scss';

let questionsAnswersComponent = {
  bindings: {
    uaProductId: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default questionsAnswersComponent;

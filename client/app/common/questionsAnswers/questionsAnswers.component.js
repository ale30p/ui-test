import template from './questionsAnswers.html';
import controller from './questionsAnswers.controller';

let questionsAnswersComponent = {
  bindings: {
    uaProductId: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default questionsAnswersComponent;

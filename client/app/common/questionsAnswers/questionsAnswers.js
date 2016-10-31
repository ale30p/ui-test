import angular from 'angular';
import questionsAnswersComponent from './questionsAnswers.component';

let questionsAnswersModule = angular.module('ml.app.questionsAnswers', [])
  .component('mlQuestionsAnswers', questionsAnswersComponent);

export default questionsAnswersModule;

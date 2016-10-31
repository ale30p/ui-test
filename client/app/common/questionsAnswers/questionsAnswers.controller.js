class QuestionsAnswersController {
  constructor() {
    'ngInject';
    this.name = 'ml.questionsAnswers';
    this.questionsAnswers = [{
      id: 1,
      buyer: 'Buen dia tenes stock?',
      seller: 'Hola, si tenemos en stock. Saludos'
    },
    {
      id: 2,
      buyer: 'Hacen envios al interior',
      seller: 'Hola, los envios son por correo. Saludos'
    },
    {
      id: 3,
      buyer: 'Tienen factura A? Tienen de mayor capacidad? Gracia',
      seller: ''
    }];
  }
}

export default QuestionsAnswersController;

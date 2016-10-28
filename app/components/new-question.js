import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionForm: false,
  actions: {
    showQuestionForm() {
      this.set('showQuestionForm', true);
    },
    saveNewQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        info: this.get('info'),
        answer: this.get('answer')
      };
      this.set('showQuestionForm', false);
      this.sendAction('saveNewQuestion', params);
    }
  }
});

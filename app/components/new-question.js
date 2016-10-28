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
      this.set('content', null);
      this.set('author', null);
      this.set('info', null);

      this.sendAction('saveNewQuestion', params);
    }
  }
});

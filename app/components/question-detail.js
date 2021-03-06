import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  updateQuestion(question, params) {
    this.sendAction("updateQuestion", question, params);
  },
  deleteQuestion(question) {
    if(confirm('Are you sure you want to delete this question?')) {
      this.sendAction("destroyQuestion", question);
      }
    },
    destroyAnswer(answer) {
      this.sendAction("destroyAnswer", answer);
    }
  }
});

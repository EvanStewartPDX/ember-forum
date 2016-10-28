import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.finalAll("question")
  },
  actions: {
    saveNewQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});

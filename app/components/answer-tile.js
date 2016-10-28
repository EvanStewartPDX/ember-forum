import Ember from 'ember';

export default Ember.Component.extend({
  actions:
    deleteAnswer(answer) {
      if(confirm('Are you sure you want to delte this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
});

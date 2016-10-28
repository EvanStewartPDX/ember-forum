import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveAnswer() {
      var params = {
        comment: this.get('comment'),
        username: this.get('username'),
        question: this.get('question')
      };
      this.set('comment', null);
      this.set('username', null);
      this.sendAction('saveAnswer', params);
    }
  }
});

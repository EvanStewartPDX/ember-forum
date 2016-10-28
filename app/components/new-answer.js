import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveAnswer() {
      var params = {
        comment: this.get('comment'),
        username: this.get('username'),
        question: this.get('question')
      };

      this.sendAction('saveAnswer', params);
      this.set('comment', null);
      this.set('username', null);
    }
  }
});

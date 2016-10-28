import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveComment() {
      var params = {
        comment: this.get('comment'),
        username: this.get('username'),
        question: this.get('question')
      };
      this.sendAction('saveComment', params);
    }
  }
});

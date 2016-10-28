import Ember from 'ember';

export default Ember.Component.extend({

  actions:
    saveComment() {
      var params = {
        comment: this.get('comment'),
        commenter: this.get('commenter')
      };
      this.sendAction('saveComment', params);
    }
  }
});

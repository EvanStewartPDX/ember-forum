import Ember from 'ember';

export default Ember.Component.extend({

    showUpdateQuestion: false,
    actions: {
      showUpdateQuestion() {
        this.set("showUpdateQuestion", true);
      },
      updateQuestion(question) {
        var params = {
          content: this.get('content'),
          author: this.get('author'),
          info: this.get('info')
        };
        this.set('showUpdateQuestion', false);
        this.sendAction('updateQuestion', question, params);
      }
    }
});

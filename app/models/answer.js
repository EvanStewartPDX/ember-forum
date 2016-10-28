import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  username: DS.attr(),
  question: DS.belongsTo('question', { async: true}),
});

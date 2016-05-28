import { Meteor } from 'meteor/meteor';
import foo from '/imports/foo/';
console.log(Meteor.release);
console.log(foo);

Meteor.startup(() => {
  // code to run on server at startup
});

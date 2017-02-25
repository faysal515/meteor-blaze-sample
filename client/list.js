import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor'
import Rooms from '../imports/collections/Rooms'
import './list.html'

Template.list.onCreated(function () {
  const self = this;
  self.subscribe('rooms');
});

Template.list.helpers({
  rooms: function () {
    return Rooms.find()
  },
  creatorName: function () {
    //console.log('... ', this.createdBy )
    return Meteor.users.findOne({_id: this.createdBy}).profile.name
  }
})

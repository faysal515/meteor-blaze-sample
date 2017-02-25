import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor'
import Rooms from '../imports/collections/Rooms'
import './main.html';
import './create.html'
import './list.html'


Meteor.startup(function () {
  console.log('started')
  //Meteor.subscribe('rooms');
})

// Template.insertRoomForm.onCreated(function () {
//   const self = this;
//   //window.Employee = Employees;
//
//   self.subscribe('rooms');
// });

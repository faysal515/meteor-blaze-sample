import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor'
import Rooms from '../imports/collections/Rooms'
import './create.html';

Template.createRoomForm.events({
  'click #save': function (event) {
    event.preventDefault()

    let data = {
      title: $('#title').val(),
      about: $('#about').val(),
      address: $('#address').val(),
      dataPoint: [123.123,32.123],
      prices: {
        basic: Number($('#price').val())
      }
    }
    console.log(data)
    Meteor.call('createRoom',data,function () {
      console.log('done')
    })
  }
})
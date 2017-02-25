import { Meteor } from 'meteor/meteor';
import {check} from 'meteor/check'
import Rooms,{ Room } from '../../imports/collections/Rooms'


Meteor.methods({
  createRoom: function (data) {
    data.location = {
      type: 'Point',
      coordinates: data.dataPoint
    }
    delete data.dataPoint
    console.log(data);
    //check(data,Room)

    Rooms.insert(data)
  }
})
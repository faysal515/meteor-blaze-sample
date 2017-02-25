import { Meteor } from 'meteor/meteor';
//import {check} from 'meteor/check'
import Rooms,{ Room } from '../imports/collections/Rooms'

import '../imports/publishes/room'
import '../imports/methods/room'
Meteor.startup(() => {
  // code to run on server at startup
  let isThere = Rooms.findOne()
  if(!isThere) {
    let obj = {
      title: 'wow new room added',
      status: 'Active',
      about:'about....',
      address: 'some address',
      prices: {
        basic: 100
      },
      location: {
        type: 'Point',
        coordinates: [50,50]
      },
      createdAt: new Date()
    }

    Rooms.insert(obj)

    console.log('....', Rooms.find().fetch())
  }

});

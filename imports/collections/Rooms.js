import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import 'meteor/matb33:collection-hooks'
import {check} from 'meteor/check'


const Rooms = new Mongo.Collection('rooms');
if(Meteor.isServer) {
  Rooms._ensureIndex({'location.coordinates':'2dsphere'});
}


/**
 *  This is a basic illustration of how SimpleSchema can be used
 *  more fields need to added to have complete demonstration of airbnb
 */

let geoType = new SimpleSchema({
  type: {
    type: String
  },
  coordinates: {
    type: [Number],
    decimal: true
  }
})
let rent = new SimpleSchema({
  basic: {
    type: Number
  },
  extra: {
    type: Number,
    optional: true
  },
  monthlyDiscount: {
    type: Number,
    optional: true
  },
  cleaning: {
    type: Number,
    optional: true
  },
  weeklyDiscount: {
    type: Number,
    optional: true
  },
  cancellation: {
    type: String,
    allowedValues: ['Strict','Flexible'],
    optional: true
  }

})
export const Room  = new SimpleSchema({
  title: {
    type: String
  },
  about: {
    type: String
  },
  location: {
    type: geoType,
  },
  address: {
    type: String
  },
  prices: {
    type: rent
  },
  status: {
    type: String,
    //optional: true,
  },
  createdAt: {
    type: Date
  },
  createdBy: {
    type: String,
    optional: true
  }
});

Rooms.before.insert(function (userId, doc) {
  doc.createdAt = new Date()
  doc.createdBy = this.userId
  doc.status = 'Active'
});

export default Rooms;
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import 'meteor/matb33:collection-hooks'
import {check} from 'meteor/check'

const Reviews = new Mongo.Collection('reviews');

export const Review  = new SimpleSchema({
  roomId: {
    type: String
  },
  comment: {
    type: String
  },
  rating: {
    type: Number
  },
  createdAt: {
    type: Date
  },
  createdBy: {
    type: String
  }
});

Reviews.before.insert(function (userId, doc) {
  doc.createdAt = new Date()
  doc.createdBy = Meteor.userId()
  let withoutId = Object.assign({},doc)
  delete withoutId._id
});

export default Reviews;
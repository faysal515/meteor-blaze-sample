import {Meteor} from 'meteor/meteor'
import 'meteor/reywood:publish-composite'
import Rooms from '../collections/Rooms'

Meteor.publishComposite('rooms', {
  find: function() {
    return Rooms.find({}, { sort: { score: -1 }, limit: 10 });
  },
  children: [
    {
      find: function(room) {
        // Find post author. Even though we only want to return
        // one record here, we use "find" instead of "findOne"
        // since this function should return a cursor.
        return Meteor.users.find(
          { _id: room.createdBy },
          { limit: 1, fields: { profile: 1 } });
      }
    },
    /*{
      find: function(post) {
        // Find top two comments on post
        return Reviews.find(
          { postId: post._id },
          { sort: { score: -1 }, limit: 2 });
      },
      children: [
        {
          find: function(review, post) {
            // Find user that authored comment.
            return Meteor.users.find(
              { _id: review.authorId },
              { limit: 1, fields: { profile: 1 } });
          }
        }
      ]
    }*/
  ]
});

/*
Meteor.publishComposite('rooms',function () {
  let single = Rooms.findOne()
  console.log('room publication', single)
  return Rooms.find({}, { sort: { score: -1 }, limit: 10 });
})*/

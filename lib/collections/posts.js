Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function (userId, doc) {
    // Only allow posting if you are logged in
    return !! userId;
  }
});
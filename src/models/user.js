/**
 * Created by acortes on 12/8/16.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    username: String,
    password: String,
    email: String,
    timestamps: true
});
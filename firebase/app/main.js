var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;

var backfire = require("client-backfire");
backfire.Backbone = Backbone;

var MoviesRouter = require('routers/movies');

$(document).ready(function() {
  console.log('init');
  var router = new MoviesRouter({el: $('#movies') });
  Backbone.history.start({
    pushState: false,
    root: '/'
  });
});

var Backbone = require('backbone');
var _ = require('underscore');

var Monitor = require('../../monitor');
// data
var Movies = require('collections/movies');
var movies = new Movies();

// views
var Layout = require('views/layout');

var MoviesRouter = Backbone.Router.extend({

  routes: {
    'movies/:id': 'selectMovie',
    '':           'showMain'
  },

  selectMovie: function(id) {
    this.movies.resetSelected();
    this.movies.selectByID(id);
    this.layout.selection.set('selected', id);
  },

  showMain: function() {
    this.movies.resetSelected();
    this.layout.setChose();
  },

  initialize: function(options) {
    monitor = new Monitor(movies);
    this.movies = movies;
    this.layout = Layout.getInstance({
      el: '#movies', router: this
    });
    this.layout.render();
  }
});
module.exports = MoviesRouter;

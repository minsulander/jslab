var MyModel = Backbone.Model.extend({
	text: 'this comes from a backbone model',
	urlRoot: '/mymodel',

	dostuff: function() {
		this.trigger('stuff');
	}
});

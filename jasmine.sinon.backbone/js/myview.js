var MyView = Backbone.View.extend({
  	render: function() {
  		this.$el.html('<h1>is funks!</h1><p>' + this.model.text + '</p>');
  		return this;
  	}
});

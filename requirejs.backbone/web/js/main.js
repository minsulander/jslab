console.log('mains');

require.config({
	baseUrl: 'js/lib',
	paths: { app: '..'},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});

//the "main" function to bootstrap your code
requirejs(['jquery', 'underscore', 'backbone', 'app/mymodel', 'app/myview'], function ($, _, Backbone, mymodel, myview) {   // or, you could use these deps in a separate module using define
	window.view = new myview({
		model: new mymodel(),
		el: $('#content')
	}).render();
});
console.log('yo');

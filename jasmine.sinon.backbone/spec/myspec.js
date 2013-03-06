describe("My Model", function() {
	var model;
	var server;

	beforeEach(function() {
		model = new MyModel();
		server = sinon.fakeServer.create();
	});

	afterEach(function() {
		server.restore();
	});

	it("exists", function() {
		expect(model).toBeDefined();
	});

	it("has text", function() {
		expect(model.text).toBeDefined();
	});

	describe("dostuff", function() {
		it("triggers stuff when called", function() {
			var spy = sinon.spy();
			model.bind('stuff', spy);
			model.dostuff();
			expect(spy.called).toBeTruthy();
		});
	});

	describe("fetch", function() {
		it("gets correct url", function() {
			model.id = 123;
			var stub = sinon.stub(jQuery, 'ajax');

			model.fetch();

			expect(stub.called).toBeTruthy();
			expect(stub.getCall(0).args[0].url).toEqual('/mymodel/123');
			jQuery.ajax.restore();
		});

		it("populates field", function() {
			model.id = 123;
			server.respondWith("GET", "/mymodel/123", [200, {"Content-Type": "application/json" }, JSON.stringify({ field: 'value' })]);
			var change = sinon.spy();

			model.bind('change', change);
			model.fetch();
			server.respond();

			expect(change.called).toBeTruthy();
			expect(model.get('field')).toEqual('value');
		});
	});

	describe("save", function() {
		it("posts to correct url", function() {
			var stub = sinon.stub(jQuery, 'ajax');

			model.save();

			expect(stub.called).toBeTruthy();
			expect(stub.getCall(0).args[0].url).toEqual('/mymodel');
			jQuery.ajax.restore();
		});
	});

});

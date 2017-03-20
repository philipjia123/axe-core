describe('link-purpose test', function () {
	'use strict';
	var results;
	before(function (done) {
		axe.run('#test-scope', { runOnly: { type: 'rule', values: ['link-purpose'] } }, function (err, r) {
			assert.isNull(err);
			results = r;
			done();
		});
	});

	describe('violations', function () {
		it('should find 0', function () {
			assert.lengthOf(results.violations, 0);
		});
	});

	//TODO: PhantomJS tests fail here, need to figure out why
	describe('passes', function () {
		it('should find 2', function () {
			assert.lengthOf(results.passes[0].nodes, 2);
		});

		it('should find #pass1', function () {
			assert.deepEqual(results.passes[0].nodes[0].target, ['#pass1']);
		});
		it('should find #pass2', function() {
			assert.deepEqual(results.passes[0].nodes[1].target, ['#pass2']);
		});
	});
});

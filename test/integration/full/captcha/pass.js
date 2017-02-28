describe('captcha pass test', function () {
	'use strict';
	var results;
	before(function (done) {
		axe.run({ runOnly: { type: 'rule', values: ['captcha'] } }, function (err, r) {
			assert.isNull(err);
			results = r;
			done();
		});
	});

	describe('violations', function () {
		it('should find none', function () {
			assert.lengthOf(results.violations, 0);
		});
	});
});

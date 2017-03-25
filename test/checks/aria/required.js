describe('aria-required', function () {
	'use strict';

	var fixture = document.getElementById('fixture');

	afterEach(function () {
		fixture.innerHTML = '';
	});

	it('should pass if neither required nor aria-required attributes are present', function() {
		fixture.innerHTML = '<input type="text">';
		var node = fixture.querySelector('input');

		assert.isTrue(checks.required.evaluate(node));
	});

	it('should fail if only required attribute is present', function() {
		fixture.innerHTML = '<input type="text" required>';
		var node = fixture.querySelector('input');

		assert.isFalse(checks.required.evaluate(node));
	});

	it('should pass if required attribute is present and aria-required is true', function() {
		fixture.innerHTML = '<input type="text" required aria-required="true">';
		var node = fixture.querySelector('input');

		assert.isTrue(checks.required.evaluate(node));
	});

	it('should fail if required attribute is present and aria-required is false', function() {
		fixture.innerHTML = '<input type="text" required aria-required="false">';
		var node = fixture.querySelector('input');

		assert.isFalse(checks.required.evaluate(node));
	});

	it('should pass if required attribute is not present and aria-required is false', function() {
		fixture.innerHTML = '<input type="text" aria-required="false">';
		var node = fixture.querySelector('input');

		assert.isTrue(checks.required.evaluate(node));
	});

	it('should fail if required attribute is not present and aria-required is true', function() {
		fixture.innerHTML = '<input type="text" aria-required="true">';
		var node = fixture.querySelector('input');

		assert.isFalse(checks.required.evaluate(node));
	});
});

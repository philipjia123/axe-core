(function() {
	'use strict';
	var fw = {};

	function addFramework(name, version) {
		var versNums = typeof version === 'string' ? version.split('.') : [];

		fw[name] = {
			version: version,
			major: versNums[0],
			minor: versNums[1],
			dot: versNums[2]
		};
	}

	//AngularJS
	if(window.angular && window.angular.version) {
		addFramework('angular', window.angular.version.full);
	}

	//jQuery
	if(window.jQuery && window.jQuery instanceof Function) {
		addFramework('jquery', window.jQuery().jquery);
	}

	//Polymer
	if(window.Polymer) {
		addFramework('polymer', window.Polymer.version);
	}

	axe.utils.frameworks = fw;
})();

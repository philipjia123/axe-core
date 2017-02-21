/*
	Include any elements with onclick attribute or function property or uses CSS
	'cursor: pointer' property
 */
if(node.getAttribute('onclick') || node.onclick instanceof Function ||
	 window.getComputedStyle(node, null).getPropertyValue('cursor') === 'pointer') {
	return true;
}

/*
	Include any elements with ARIA roles that should be focusable (any that are
	implicitly 'input' or anchor elements and any that are composites e.g. grid,
	listbox, etc.)
 */
var role = node.getAttribute('role');
if(role) {
	role = role.toLowerCase();
	var inputRgx = /^input\[|a\[/,
			type = axe.commons.aria.getRoleType(role),
			imp = axe.commons.aria.implicitNodes(role);
	if(type === 'composite') {
		return true;
	} else if(imp) {
		for(var ii in imp) {
			if(inputRgx.test(imp[ii])) {
				return true;
			}
		}
	}
}

//Framework-specific detection

//Angular
if(axe.utils.frameworks.angular && node.getAttribute('ng-click')) {
	return true;
}

//jQuery
if(axe.utils.frameworks.jquery) {
	var jQVersion = axe.utils.frameworks.jquery;
	if(jQVersion.major >= 1) {
		//Only jQuery >= 1.2.3 and < 1.8 have events accessible from user data name space
		if(jQVersion.major === 1 && jQVersion.minor < 8) {
			if(jQVersion.minor >= 2 && !(jQVersion.minor === 2 && jQVersion.dot < 3)) {
				if(window.jQuery(node).data('events').click) {
					return true;
				}
			}
		} else {
			//jQuery >= 1.8 must use 'undocumented' internal data structure
			if(window.jQuery._data(node, 'events').click) {
				return true;
			}
		}
	}
}

return false;

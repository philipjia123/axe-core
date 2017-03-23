if(node.hasAttribute('required')) {
	return node.getAttribute('aria-required') === 'true';
} else {
	return !node.hasAttribute('aria-required') || node.getAttribute('aria-required') === 'false';
}

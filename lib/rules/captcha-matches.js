if(window.RecaptchaOptions) {
	var id = node.getAttribute('id');
	if(id === 'recaptcha_widget_div') {
		return true;
	} else if(RecaptchaOptions.custom_theme_widget &&
						id === RecaptchaOptions.custom_theme_widget) {
		return true;
	}
}
return false;

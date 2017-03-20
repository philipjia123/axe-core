var blacklist = options ? (options.blacklistPhrases || {}) : {},
		stopwords = options ? (options.stopwords || {}) : {},
		docEl = window.document.documentElement,
		//Default to English if no language is specified
		lang = (docEl.getAttribute('lang') || docEl.getAttribute('xml:lang') || 'en').trim(),
		text = axe.commons.text.accessibleText(node).trim().replace(/[^a-zA-Z ]/g, ''),
		index, rgx;

if(!text) {
	return false;
}

/**
 * TODO: Currently, this check will only work for ASCII text.  In order to fully
 * 			 support i18n, we will have to deal with Unicode regular expressions in
 * 			 JS, which is a nightmare
 */

if(Array.isArray(blacklist[lang])) {
	for(index in blacklist[lang]) {
		rgx = new RegExp('^\\s*' + blacklist[lang][index].trim().replace(/\s+/, '\\s*')
				+ "\s*[^a-z]$", 'i');  //Not sure why, but have to use double quotes here or else grunt build barfs
		if(rgx.test(text)) {
			return false;
		}
	}
}

if(Array.isArray(stopwords[lang])) {
	for(index in stopwords[lang]) {
		rgx = new RegExp('\\b' + stopwords[lang][index] + '\\b', 'ig');
		text = text.replace(rgx, '');
		if(text.trim() === '') {
			return false;
		}
	}
}

return true;

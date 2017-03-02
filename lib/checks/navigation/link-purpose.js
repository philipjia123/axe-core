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

if(Array.isArray(blacklist[lang])) {
	for(index in blacklist[lang]) {
		rgx = new RegExp('^\\s*' + blacklist[lang][index].trim().replace(/\s+/, '\\s*')
				+ '\s*[^a-z]$', 'i');
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

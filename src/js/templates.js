miniLock.templates = {}

miniLock.templates.keyStrengthMoreInfo = 'The key you have entered is too weak.'
	+ '<p>Having a long, unique key is very important for using miniLock. '
	+ 'Try using a <strong>phrase</strong> that makes sense only to you.<br /><br />'
	+ 'We strongly recommend allowing miniLock to generate a key for you:<br />'
	+ '<input type="text" value="{{phrase}}" spellcheck="false" readonly="readonly" />'
	+ '<input type="button" value="Get another phrase" /></p>'

miniLock.templates.audienceListIdentity = ''
	+ '<div class="{{className}} identity">'
	+ 	'<label>{{label}}</label>'
	+ 	'<input class="code" type="text" placeholder="Add another miniLock ID" value="{{id}}" />'
	+ 	'<input class="remove" type="button" value="&#xf081;" tabindex="-1" />'
	+ '</div>'

miniLock.templates.filename = ''
	+ '<b class="basename">{{basename}}</b>'
	+ '<span class="extensions">{{extensions}}</span>'
	+ '<span class="minilock extension">.minilock</span>'

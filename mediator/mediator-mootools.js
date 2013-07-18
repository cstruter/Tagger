;(function(ER) {
	$M.ById = function(id) {
		return $M.El(document.id(id));
	}
	$M.Sel = function(selector) {
		return $M.El($$(selector));
	}
	ER.Append = function(obj) {
		this.element.grab(new Element('span', {html:obj}));
	}
	ER.Before = function(obj) {
		this.element.grab(new Element('span', {html:obj}), 'before');
	}
	ER.Hide = function() {
		this.element.setStyle('visibility', 'hidden');
	}
	ER.Html = function(value) {
		if (typeof value === 'undefined') {
			return this.element.get('html');
		}
		this.element.set('html', value);
	}
	ER.Attribute = function(id) {
		return this.element.get(id);
	}
	$M.EventArgs = function(e) {
		this.Which = e.code;
		this.Type = e.type;
	}
	ER.On = function(eventName, eventCallback) {
		this.element.addEvent(eventName, function(e) {
			eventCallback.call(this, new $M.EventArgs(e));
		});
	}
	ER.Off = function() {
		this.element.removeEvents();
	}
	ER.Value = function(value) {
		if (typeof value === 'undefined') {
			return this.element.get('value');
		}
		this.element.set('value', value);
	}
	$M.String.Trim = function(value) {
		return value.trim();
	}
	$M.Array.In = function(value, array) {
		return array.indexOf(value);
	}
}($M.ElementResult.prototype));
Element.implement({
	tagger: function(){
		var tagger = Tagger.call(this);
		return this.store('tagger', tagger);
	}
});
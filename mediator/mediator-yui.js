YUI().use('node', function (Y) {
	var ER = $M.ElementResult.prototype;
	$M.ById = function(id) {
		return $M.El(Y.one('#' + id));
	}
	$M.Sel = function(selector) {
		return $M.El(Y.all(selector));
	}
	ER.Append = function(obj) {
		this.element.append(obj);
	}
	ER.Before = function(obj) {
		obj = Y.Node.create(obj);
		Y.one('body').insert(obj, this.element);
	}
	ER.Hide = function() {
		this.element.hide();
	}
	ER.Html = function(value) {
		if (typeof value === 'undefined') {
			return this.element.getContent();
		}
		this.element.setContent(value);
	}
	ER.Attribute = function(id) {
		return this.element.getAttribute(id);
	}
	ER.On = function(eventName, eventCallback) {
		if (typeof this.element.size === 'undefined') {
			this.element.on(eventName, function(e) {
				eventCallback.call(this, new $M.EventArgs(e));
			});
		} else {
			this.element.each(function (node, index) {
				node.on(eventName, function(e){
					eventCallback.call(this, new $M.EventArgs(e));
				});
			});
		}
	}
	ER.Off = function() {
		this.element.detach();
	}
	ER.Value = function(value) {
		if (typeof value === 'undefined') {
			return this.element.get('value');
		}
		this.element.set('value', value);
	}
	$M.String.Trim = function(value) {
		return Y.Lang.trim(value);
	}
	$M.Array.In = function(value, array) {
		return Y.Array.indexOf(array, value);
	}
});
YUI.add('tagger', function(Y) {

	Y.tagger = function(element) {
		Tagger.call(element);
	}

}, '1.0', {requires: ['base']});
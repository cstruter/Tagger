;(function(ER) {
	$M.ById = function(id) {
		return $M.El(Ext.get(id));
	}
	$M.Sel = function(selector) {
		return $M.El(Ext.select(selector));
	}
	$M.El = function(element) {
		if (typeof element.dom === 'undefined') {
			element = Ext.get(element);
		}
		return new $M.ElementResult(element);	
	}
	ER.Append = function(obj) {
		Ext.DomHelper.insertHtml('beforeEnd', this.element.dom, obj);
	}
	ER.Before = function(obj) {
		Ext.DomHelper.insertHtml('beforeBegin', this.element.dom, obj);
	}
	ER.Hide = function() {
		this.element.hide();
	}
	ER.Html = function(value) {
		if (typeof value === 'undefined') {
			return this.element.dom.innerHTML;
		}
		this.element.dom.innerHTML = value;
	}
	ER.Attribute = function(id) {
		return this.element.getAttribute(id);
	}
	$M.EventArgs = function(e) {
		this.Which = e.keyCode;
		this.Type = e.type;
	}
	ER.On = function(eventName, eventCallback) {
		this.element.on(eventName, function(e) {
			eventCallback.call(this, new $M.EventArgs(e));
		});
	}
	ER.Off = function() {
		this.element.un();
	}
	ER.Value = function(value) {
		if (typeof value === 'undefined') {
			return this.element.dom.value;
		}
		this.element.dom.value = value;
	}	
	$M.String.Trim = function(value) {
		return Ext.util.Format.trim(value);
	}
	$M.Array.In = function(value, array) {
		return array.indexOf(value);
	}
}($M.ElementResult.prototype));
Tagger.Init = function(Id) {
	Tagger.call(Ext.get(Id));
}
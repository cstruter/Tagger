;(function(ER) {
	$M.ById = function(id) {
		return $M.El($(id));
	}
	$M.Sel = function(selector) {
		return $M.El($$(selector));
	}
	ER.Append = function(obj) {
		this.element.insert(obj);
	}
	ER.Before = function(obj) {
		this.element.insert({before:obj});
	}
	ER.Hide = function() {
		this.element.hide();
	}
	ER.Html = function(value) {
		if (typeof value === 'undefined') {
			return this.element.innerHTML;
		}
		this.element.innerHTML = value;
	}
	ER.Attribute = function(id) {
		return this.element.readAttribute(id);
	}
	$M.EventArgs = function(e) {
		this.Which = (event.which || event.keyCode);
		this.Type = e.type;
	}
	ER.On = function(eventName, eventCallback) {
		if (typeof this.element.each !== 'undefined') {
			this.element.each(function(sender) {
				sender.observe(eventName, function(e) {
					eventCallback.call(this, new $M.EventArgs(e));
				});
			});
		} else {
			this.element.observe(eventName, function(e) {
				eventCallback.call(this, new $M.EventArgs(e));
			});
		}
	}
	ER.Off = function() {
		if (typeof this.element.each !== 'undefined') {
			this.element.each(function(sender) {
				sender.stopObserving();
			});
		} else if (typeof this.element.stopObserving !== 'undefined') {
			this.element.stopObserving();
		}
	}
	ER.Value = function(value) {
		if (typeof value === 'undefined') {
			return this.element.value;
		}
		this.element.value = value;
	}
	$M.String.Trim = function(value) {
		return value.strip();
	}
	$M.Array.In = function(value, array) {
		return array.indexOf(value);
	}
}($M.ElementResult.prototype));
var TaggerBase = Tagger;
var Tagger = Class.create(
	{
		Version: '0.0.1',
		initialize: function(element, options) {
			var element = $(element);
			TaggerBase.call(element);
		}
		
	}
);
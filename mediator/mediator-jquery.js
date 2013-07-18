;(function($, ER) {
	$M.ById = function(id) {
		return $M.El($('#' + id));
	}
	$M.Sel = function(selector) {
		return $M.El($(selector));
	}
	$M.El = function(element) {
		if (!(element instanceof jQuery)) {
			element = $(element);
		}
		return new $M.ElementResult(element);
	}
	ER.Append = function(obj) {
		this.element.append(obj);
	}
	ER.Before = function(obj) {
		this.element.before(obj);
	}
	ER.Hide = function() {
		this.element.hide();
	}
	ER.Html = function(value) {
		if (typeof value === 'undefined') {
			return this.element.html();
		}
		this.element.html(value);
	}
	ER.Attribute = function(id) {
		return this.element.prop(id);
	}
	ER.On = function(eventName, eventCallback) {
		this.element.on(eventName, function(e) {
			eventCallback.call(this, new $M.EventArgs(e));
		});
	}
	ER.Off = function() {
		this.element.off();
	}
	ER.Value = function(value) {
		if (typeof value === 'undefined') {
			return this.element.val();
		}
		this.element.val(value);
	}
	$M.Array.In = function(value, array) {
		return $.inArray(value, array);
	}
	$M.String.Trim = function(value) {
		return $.trim(value);
	}
	$.fn.tagger = Tagger; 
}(jQuery, $M.ElementResult.prototype));
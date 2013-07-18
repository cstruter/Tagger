;(function(ER) {
	$M.ById = function(id) {
		this.selector = id;
		return $M.El(dojo.byId(id));
	}
	$M.Sel = function(selector) {
		this.selector = selector;
		return $M.El(dojo.query(selector));
	}
	$M.El = function(element) {
		element.selector = ( typeof this.selector !== 'undefined') 
					? this.selector : element.id;
		return new $M.ElementResult(element);	
	}
	ER.Append = function(obj) {
		dojo.place(obj, this.element);
	}
	ER.Before = function(obj) {
		dojo.place(obj, this.element, "before");
	}
	ER.Hide = function() {
		dojo.style(this.element, 'visibility','hidden');
	}
	ER.Html = function(value) {
		if (typeof value === 'undefined') {
			return this.element.innerHTML;
		}
		this.element.innerHTML = value;
	}
	ER.Attribute = function(id) {
		var value = dojo.attr(this.element, id);
		if (value != false) {
			return value;
		}
	}
	$M.EventArgs = function(e) {
		this.Which = (event.which || event.keyCode);
		this.Type = e.type;
	}		
	ER.On = function(eventName, eventCallback) {
		if (typeof this.element.on === 'function') {
			var handler = this.element.on(eventName, function(e) {
				eventCallback.call(this, new $M.EventArgs(e));
			});
		} else {
			var handler = dojo.connect(this.element, eventName, function(e) {
				eventCallback.call(this, new $M.EventArgs(e));
			});
		}
		$M.Handlers.Add(this.element.selector, handler);
	}
	ER.Off = function() {
		$M.Handlers.Remove(this.element, this.element.selector);
	}
	ER.Value = function(value) {
		if (typeof value === 'undefined') {
			return dojo.attr(this.element, 'value');
		}
		dojo.setAttr(this.element, 'value', value)
	}			
	$M.String.Trim = function(value) {
		return dojo.trim(value);
	}
	$M.Array.In = function(value, array) {
		return dojo.indexOf(array, value);
	}
	$M.Handlers = {
		list: {},
		Add : function(id, handler) {
			if (typeof this.list[id] === 'undefined') {
				this.list[id] = [];
			}
			this.list[id].push(handler);
		},
		Remove: function(element, id) {
			if (typeof this.list[id] !== 'undefined') {
				dojo.forEach(this.list[id], function(sender) {
					dojo.disconnect(sender);
				});
				this.list[id] = [];
			}
		}
	}
}($M.ElementResult.prototype));
require(["dojo/_base/declare", "dojo/parser", "dojo/ready", "dijit/_WidgetBase"], 
function(declare, parser, ready, _WidgetBase){
	declare("TaggerWidget", [_WidgetBase], {
		constructor: function(params, srcNodeRef){
			Tagger.call(srcNodeRef);
		}
	});
	ready(function(){
		parser.parse();
	});
});
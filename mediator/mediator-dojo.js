var Mediator = MediatorInterface(
	{
		ElementById : function(id) {
			this.selector = id;
			return Mediator.Element(dojo.byId(id));
		},
		Elements : function(selector) {
			this.selector = selector;
			return Mediator.Element(dojo.query(selector));
		},
		Element : function(element) {
			var selector = ( typeof this.selector !== 'undefined') 
							? this.selector : element.id;
			var self = {
				Append : function(obj) {
					dojo.place(obj, element);
				},
				Before : function(obj) {
					dojo.place(obj, element, "before");
				},
				Hide : function() {
					dojo.style(element, 'visibility','hidden');
				},
				Html : function(value) {
					if (typeof value === 'undefined') {
						return element.innerHTML;
					}
					element.innerHTML = value;
				},
				Attribute : function(id) {
					var value = dojo.attr(element, id);
					if (value != false) {
						return value;
					}
				},
				EventArgs : function(e) {
					return {
						Which : (event.which || event.keyCode),
						Type : e.type
					}
				},
				Event : {
					On : function(eventName, eventCallback) {
						if (typeof element.on === 'function') {
							var handler = element.on(eventName, function(e) {
								eventCallback.call(this, self.EventArgs(e));
							});
						} else {
							var handler = dojo.connect(element, eventName, function(e) {
								eventCallback.call(this, self.EventArgs(e));
							});
						}
						Mediator.Handlers.Add(selector, handler);
					},
					Off : function() {
						Mediator.Handlers.Remove(element, selector);
					}
				},
				Value : function(value) {
					if (typeof value === 'undefined') {
						return dojo.attr(element, 'value');
					}
					dojo.setAttr(element, 'value', value)
				}
			};
			return self;
		},
		String : {
			Trim : function(value) {
				return dojo.trim(value);
			}
		},
		Array : {
			In : function(value, array) {
				return dojo.indexOf(array, value);
			}
		}
	}
);

Mediator.Handlers = {
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
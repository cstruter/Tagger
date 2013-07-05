var Mediator = MediatorInterface(
	{
		ElementById : function(id) {
			return Mediator.Element($(id));
		},
		Elements : function(selector) {
			return Mediator.Element($$(selector));
		},
		Element : function(element) {
			var self = {
				Append : function(obj) {
					element.insert(obj);
				},
				Before : function(obj) {
					element.insert({before:obj});
				},
				Hide : function() {
					element.hide();
				},
				Html : function(value) {
					if (typeof value === 'undefined') {
						return element.innerHTML;
					}
					element.innerHTML = value;
				},
				Attribute : function(id) {
					return element.readAttribute(id);
				},
				EventArgs : function(e) {
					return {
						Which : (event.which || event.keyCode),
						Type : e.type
					}
				},
				Event : {
					On : function(eventName, eventCallback) {
						
						if (typeof element.each !== 'undefined') {
							element.each(function(sender) {
								sender.observe(eventName, function(e) {
									eventCallback.call(this, self.EventArgs(e));
								});
							});
						} else {
							element.observe(eventName, function(e) {
								eventCallback.call(this, self.EventArgs(e));
							});
						}
					},
					Off : function() {
						if (typeof element.each !== 'undefined') {
							element.each(function(sender) {
								sender.stopObserving();
							});
						} else if (typeof element.stopObserving !== 'undefined') {
							element.stopObserving();
						}
					}
				},
				Value : function(value) {
					if (typeof value === 'undefined') {
						return element.value;
					}
					element.value = value;
				}
			};
			return self;
		},
		String : {
			Trim : function(value) {
				return value.strip();
			}
		},
		Array : {
			In : function(value, array) {
				return array.indexOf(value);
			}
		}
	}
);

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
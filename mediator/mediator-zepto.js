var Mediator = MediatorInterface(
	{
		ElementById : function(id) {
			return Mediator.Element($('#' + id));
		},
		Elements : function(selector) {
			return Mediator.Element($(selector));
		},
		Element : function(element) {
			if ((typeof element.val === 'undefined')) {
				element = $(element);
			}
			var self = {
				Append : function(obj) {
					element.append(obj);
				},
				Before : function(obj) {
					element.before(obj);
				},
				Hide : function() {
					element.hide();
				},
				Html : function(value) {
					if (typeof value === 'undefined') {
						return element.html();
					}
					element.html(value);
				},
				Attribute : function(id) {
					return element.prop(id);
				},
				EventArgs : function(e) {
					return {
						Which : e.which,
						Type : e.type
					}
				},
				Event : {
					On : function(eventName, eventCallback) {
						element.on(eventName, function(e) {
							eventCallback.call(this, self.EventArgs(e));
						});
					},
					Off : function() {
						element.off();
					}
				},
				Value : function(value) {
					if (typeof value === 'undefined') {
						return element.val();
					}
					element.val(value);
				}
			};
			return self;
		},
		String : {
			Trim : function(value) {
				return $.trim(value);
			}
		},
		Array : {
			In : function(value, array) {
				return $.inArray(value, array);
			}
		}
	}
);
(function($) {
	$.fn.tagger = Tagger; 
}(Zepto));
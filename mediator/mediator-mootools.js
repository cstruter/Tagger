var Mediator = MediatorInterface(
	{
		ElementById : function(id) {
			return Mediator.Element(document.id(id));
		},
		Elements : function(selector) {
			return Mediator.Element($$(selector));
		},
		Element : function(element) {
			var self = {
				Append : function(obj) {
					element.grab(new Element('span', {html:obj}));
				},
				Before : function(obj) {
					element.grab(new Element('span', {html:obj}), 'before');
				},
				Hide : function() {
					element.setStyle('visibility', 'hidden');
				},
				Html : function(value) {
					if (typeof value === 'undefined') {
						return element.get('html');
					}
					element.set('html', value);
				},
				Attribute : function(id) {
					return element.get(id);
				},
				EventArgs : function(e) {
					return {
						Which : e.code,
						Type : e.type
					}
				},
				Event : {
					On : function(eventName, eventCallback) {
						element.addEvent(eventName, function(e) {
							eventCallback.call(this, self.EventArgs(e));
						});
					},
					Off : function() {
						element.removeEvents();
					}
				},
				Value : function(value) {
					if (typeof value === 'undefined') {
						return element.get('value');
					}
					element.set('value', value);
				}
			};
			return self;
		},
		String : {
			Trim : function(value) {
				return value.trim();
			}
		},
		Array : {
			In : function(value, array) {
				return array.indexOf(value);
			}
		}
	}
);

Element.implement({
	tagger: function(){
		var tagger = Tagger.call(this);
		return this.store('tagger', tagger);
	}
});
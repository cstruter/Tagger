var Mediator = null;
YUI().use('node', function (Y) {

	Mediator = MediatorInterface(
		{
			ElementById : function(id) {
				return Mediator.Element(Y.one('#' + id));
			},
			Elements : function(selector) {
				return Mediator.Element(Y.all(selector));
			},
			Element : function(element) {
				var self = {
					Append : function(obj) {
						element.append(obj);
					},
					Before : function(obj) {
						obj = Y.Node.create(obj);
						Y.one('body').insert(obj, element);
					},
					Hide : function() {
						element.hide();
					},
					Html : function(value) {
						if (typeof value === 'undefined') {
							return element.getContent();
						}
						element.setContent(value);
					},
					Attribute : function(id) {
						return element.getAttribute(id);
					},
					EventArgs : function(e) {
						return {
							Which : e.which,
							Type : e.type
						}
					},
					Event : {
						On : function(eventName, eventCallback) {
							if (typeof element.size === 'undefined') {
								element.on(eventName, function(e) {
									eventCallback.call(this, self.EventArgs(e));
								});
							} else {
								element.each(function (node, index) {
									node.on(eventName, function(e){
										eventCallback.call(this, self.EventArgs(e));
									});
								});
							}
						},
						Off : function() {
							element.detach();
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
					return Y.Lang.trim(value);
				}
			},
			Array : {
				In : function(value, array) {
					return Y.Array.indexOf(array, value);
				}
			}
		}
	);
});

YUI.add('tagger', function(Y) {

	Y.tagger = function(element) {
		Tagger.call(element);
	}

}, '1.0', {requires: ['base']});
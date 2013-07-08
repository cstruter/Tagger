var Mediator = MediatorInterface(
	{
		ElementById : function(id) {
			return Mediator.Element(Ext.get(id));
		},
		Elements : function(selector) {
			return Mediator.Element(Ext.select(selector));
		},
		Element : function(element) {
			if (typeof element.dom === 'undefined') {
				element = Ext.get(element);
			}
			var self = {
				Append : function(obj) {
					Ext.DomHelper.insertHtml('beforeEnd', element.dom, obj);
				},
				Before : function(obj) {
					Ext.DomHelper.insertHtml('beforeBegin', element.dom, obj);
				},
				Hide : function() {
					element.hide();
				},
				Html : function(value) {
					if (typeof value === 'undefined') {
						return element.dom.innerHTML;
					}
					element.dom.innerHTML = value;
				},
				Attribute : function(id) {
					return element.getAttribute(id);
				},
				EventArgs : function(e) {
					return {
						Which : e.keyCode,
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
						element.un();
					}
				},
				Value : function(value) {
					if (typeof value === 'undefined') {
						return element.dom.value;
					}
					element.dom.value = value;
				}
			};
			return self;
		},
		String : {
			Trim : function(value) {
				return Ext.util.Format.trim(value);
			}
		},
		Array : {
			In : function(value, array) {
				return array.indexOf(value);
			}
		}
	}
);

Ext.ns('Tagger');

Tagger.MyPanel = function(config) {
    Tagger.MyPanel.superclass.constructor.call(this, config);
} 

Ext.extend(Tagger.MyPanel, Ext.Panel, {
    constructor : function(config) {
		alert(config);
        Tagger.MyPanel.superclass.constructor.apply(this, config);
    },
    initComponent : function() {
		
	}
});

Tagger.Init = function(Id) {
	Tagger.call(Ext.get(Id));
}
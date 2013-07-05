var MediatorInterface = function(implementation) {
	return {
		ElementById : function(id) {
			return implementation.ElementById(id);
		},
		Elements : function(selector) {
			return implementation.Elements(selector);
		},
		Element : function(selector) {
			return {
				Append : function(obj) {
					implementation.Element(selector).Append(obj);
				},
				Before : function(obj) {
					implementation.Element(selector).Before(obj);
				},
				Hide : function() {
					implementation.Element(selector).Hide();
				},
				Html : function(value) {
					return implementation.Element(selector).Html(value);
				},
				Attribute : function(id) {
					return implementation.Element(selector).Attribute(id);
				},
				EventArgs : function(e) {
					return {
						Which : '',
						Type : ''
					}
				},
				Event : {
					On : function(eventName, eventCallback) {
						implementation.Element(selector).Event.On(eventName, eventCallback);
					},
					Off : function() {
						implementation.Element(selector).Event.Off();
					}
				},
				Value : function(value) {
					return implementation.Element(selector).Value(value);
				}
			};
		},
		String : {
			Trim : function(value) {
				return implementation.String.Trim(value);
			}
		},
		Array : {
			In : function(value, array) {
				return implementation.Array.In(value, array);
			}
		}
	};
}
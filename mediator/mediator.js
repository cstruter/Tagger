var $M = {
	ById : function(id) { },
	Sel : function(selector) { },
	El : function(element) { 
		return new $M.ElementResult(element);	
	},
	String : {
		Trim : function(value) { }
	},
	Array : {
		In : function(value, array) { }
	}
};

$M.EventArgs = function(e) {
	this.Which = e.which;
	this.Type = e.type;
}

$M.ElementResult = function(element) { 
	this.element = element;
}
$M.ElementResult.prototype = new function() {
	this.Append = function(obj) {}
	this.Before = function(obj) {}
	this.Hide = function() {}
	this.Html = function(value) {}
	this.Attribute = function(id) {}
	this.Value = function(value) { }
	this.On = function(eventName, eventCallback) { }
	this.Off = function() { }	
}
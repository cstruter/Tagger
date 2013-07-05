var Tagger = function() {
	var tags = [];
	var element = Mediator.Element(this);
	var id = element.Attribute('id');
	var tagName = id + '_tagger';
	var tagsElementName = id + '_tags';
	var readOnly = !!(element.Attribute('readonly'));

	function CreateTags() {
		var tagsElement = Mediator.ElementById(tagsElementName);
		tagsElement.Html('');
		Mediator.Elements('.tag.' + tagName).Event.Off();
		for (var i = 0; i < tags.length; i++) {
			tagsElement.Append('<span class="tag ' + tagName + '">' + tags[i] + '</span>');
		}
		if (!readOnly) {
			Mediator.Elements('.tag.' + tagName).Event.On('click', function(e) {
				var value = Mediator.Element(this).Html();
				tags.splice(Mediator.Array.In(value, tags), 1);
				CreateTags();
			});
			Mediator.ElementById(id).Value(tags);
		}
	}
	
	element.Hide();
	element.Before('<div class="tags" id="' + tagsElementName + '"></div>');
	
	if (element.Value().length > 0) {
		tags = element.Value().split(',');
		CreateTags();
	}
	
	if (readOnly) {
		return;
	}
	
	element.Before('<input type="text" id="' + tagName + '" />');
	
	Mediator.ElementById(tagName).Event.On('keydown', function(e) {
		var tagInputElement = Mediator.Element(this);
		if ((e.Which == 8) && (tagInputElement.Value().length == 0)) {
			tags.pop();
			CreateTags();
		}
	});
	
	Mediator.ElementById(tagName).Event.On('keypress', function(e) {
		var tagInputElement = Mediator.Element(this);
		if (e.Which == 13) {
			var value = Mediator.String.Trim(tagInputElement.Value().toLowerCase());
			if ((value.length > 0) && (Mediator.Array.In(value, tags) == -1)) {
				tags.push(value);
				CreateTags();
				tagInputElement.Value('');
			}
		}
	});
}; 
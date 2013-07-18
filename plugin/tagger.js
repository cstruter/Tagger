var Tagger = function() {
	var tags = [];
	var element = $M.El(this);
	var id = element.Attribute('id');
	var tagName = id + '_tagger';
	var tagsElementName = id + '_tags';
	var readOnly = !!(element.Attribute('readonly'));

	function CreateTags() {
		var tagsElement = $M.ById(tagsElementName);
		tagsElement.Html('');
		$M.Sel('.tag.' + tagName).Off();
		for (var i = 0; i < tags.length; i++) {
			tags[i] = $M.String.Trim(tags[i]);
			tagsElement.Append('<span class="tag ' + tagName + '">' + tags[i] + '</span>');
		}
		if (!readOnly) {
			$M.Sel('.tag.' + tagName).On('click', function(e) {
				var value = $M.El(this).Html();
				tags.splice($M.Array.In(value, tags), 1);
				CreateTags();
			});
			$M.ById(id).Value(tags);
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
	
	$M.ById(tagName).On('keydown', function(e) {
		var tagInputElement = $M.El(this);
		if ((e.Which == 8) && (tagInputElement.Value().length == 0)) {
			tags.pop();
			CreateTags();
		}
	});
	
	$M.ById(tagName).On('keypress', function(e) {
		var tagInputElement = $M.El(this);
		if (e.Which == 13) {
			var value = $M.String.Trim(tagInputElement.Value().toLowerCase());
			if ((value.length > 0) && ($M.Array.In(value, tags) == -1)) {
				tags.push(value);
				CreateTags();
				tagInputElement.Value('');
			}
		}
	});
}; 
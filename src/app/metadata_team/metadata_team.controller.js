'use strict';

angular.module('ga4gh').controller('MetadataTeamCtrl', function ($scope, Tabletop) {
	$scope.team_name = 'Metadata Task Team';
	$scope.team_desc_text = '#### The mission of the Metadata Task Team is to build a sample metadata schema that is shared by all data models and used across all GA4GH Working Groups.';
	$scope.github = {
		uri: 'https://github.com/ga4gh/schemas',
		text: 'githb.com/ga4gh/schemas'
	};
	Tabletop.then(function (ttdata) {
		var data = ttdata[0].metadata.elements;
		$scope.members = split(data, 3);
	});
	function split(a, n) {
		var len = a.length,
			out = [],
			i = 0;
		while (i < len) {
			var size = Math.ceil((len - i) / n--);
			out.push(a.slice(i, i += size));
		}
		return out;
	}

});


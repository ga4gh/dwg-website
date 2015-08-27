'use strict';

angular.module('ga4gh').controller('BeaconTeamCtrl', function ($scope, Tabletop) {
    $scope.active_menu = 'teams';
	$scope.team_name = 'Beacon Project';
    $scope.team_desc_text = 'The Beacon project is a project to test the willingness of international sites to share genetic data in the simplest of all technical contexts.';

	$scope.github = {
		uri: 'https://github.com/ga4gh/schemas',
		text: 'githb.com/ga4gh/schemas'
	};
	Tabletop.then(function (ttdata) {
		var data = ttdata[0].beacon.elements;
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


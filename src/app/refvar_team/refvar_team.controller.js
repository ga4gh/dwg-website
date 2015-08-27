'use strict';

angular.module('ga4gh').controller('RefVarTeamCtrl', function ($scope, Tabletop) {
	// Create a set of sizes...
    $scope.active_menu = 'teams';
	$scope.team_name = 'Reference Variation Task Team';
    $scope.team_desc_text = 'The mission of the Reference Variation Team is to describe the major ways in which genomes differ from each other and to provide that information to researchers to help them assemble and interpret them.';
	$scope.github = {
		uri: 'https://github.com/ga4gh/schemas',
		text: 'githb.com/ga4gh/schemas'
	};
	Tabletop.then(function (ttdata) {
		var data = ttdata[0].refvar.elements;
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


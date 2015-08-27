'use strict';

angular.module('ga4gh').controller('ReadsTeamCtrl', function ($scope, Tabletop) {
    $scope.active_menu = 'teams';
	$scope.team_name = 'Reads Task Team';
    $scope.team_desc_text = 'The Reads Task team works to provide APIs to interoperably store, process, explore and share DNA sequence reads across multiple organizations and on multiple platforms.';

	$scope.github = {
		uri: 'https://github.com/ga4gh/schemas',
		text: 'githb.com/ga4gh/schemas'
	};
	Tabletop.then(function (ttdata) {
		var data = ttdata[0].reads.elements;
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


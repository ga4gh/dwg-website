'use strict';

angular.module('ga4gh').controller('CWFTeamCtrl', function ($scope, Tabletop) {
    $scope.active_menu = 'teams';
	$scope.team_name = 'Containers and Workflows Task Team';
    $scope.team_desc_text = 'The Common Workflow Language (CWL) is an informal, multi-vendor working group consisting of various organizations and individuals that have an interest in portability of data analysis workflows.  Our goal is to create specifications that enable data scientists to describe analysis tools and workflows that are powerful, easy to use, portable, and support reproducibility.  CWL can be used to describe workflows for a variety of problem areas including data-intensive science like bioinformatics, physics, and astronomy; and business analytics such as log analysis, data mining, and ETL. This group was born out of the BOSC 2014 codefest.';

	$scope.github = {
		uri: 'https://github.com/ga4gh/schemas',
		text: 'githb.com/ga4gh/schemas'
	};
	Tabletop.then(function (ttdata) {
		var data = ttdata[0].CWF.elements;
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


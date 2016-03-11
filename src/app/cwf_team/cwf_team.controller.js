'use strict';

angular.module('ga4gh').controller('CWFTeamCtrl', function ($scope, Tabletop) {
    $scope.active_menu = 'teams';
	$scope.team_name = 'Containers and Workflows Task Team';
    $scope.team_desc_text = '#### The GA4GH containers and workflow group is focused on technologies and best practice methodologies for running portable and reproducible genomic analysis pipelines. This group coordinates efforts around the development of languages for describing repeatable genomic workflows, as well as tools and APIs for discovering genomic analysis tools. Members of this working group include the developers from several workflow description efforts (such as [CWL](http://commonwl.org), and [WDL](https://github.com/broadinstitute/wdl), ), as well as maintainers of genomic container repositories.';

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


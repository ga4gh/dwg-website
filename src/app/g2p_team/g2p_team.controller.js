'use strict';

angular.module('ga4gh').controller('G2PTeamCtrl', function ($scope, Tabletop) {
	$scope.active_menu = 'teams';
	$scope.team_name = 'Genotype To Phenotype (G2P) Task Team';
	$scope.team_desc_text = '#### The Genotype to Phenotype team will formalize the language and methods used to represent different kinds of genotype-phenotype associations and how confident we are in our assessment of these associations.';
	$scope.github = {
		uri: 'https://github.com/ga4gh/schemas',
		text: 'githb.com/ga4gh/schemas'
	};
	Tabletop.then(function (ttdata) {
		var data = ttdata[0].G2P.elements;
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


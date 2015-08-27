'use strict';

angular.module('ga4gh').controller('VariantAnnotationTeamCtrl', function ($scope, Tabletop) {
    $scope.active_menu = 'teams';
	$scope.team_name = 'Variant Annotation Task Team';
    $scope.team_desc_text = 'The mission of Variant Annotation task team is to develop common standards for reporting variant annotation including results formats, ontologies and vocabularies for different classes of annotation so reporting is consistent and in a manner that facilitates benchmarking and evaluation.';


	$scope.github = {
		uri: 'https://github.com/ga4gh/schemas',
		text: 'githb.com/ga4gh/schemas'
	};
	Tabletop.then(function (ttdata) {
		var data = ttdata[0].variantannotation.elements;
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


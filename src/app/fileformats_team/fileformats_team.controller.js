'use strict';

angular.module('ga4gh').controller('FileFormatsTeamCtrl', function ($scope, Tabletop) {
    $scope.active_menu = 'teams';
	$scope.team_name = 'File Formats Task Team';
    $scope.team_desc_text = 'The Global Alliance Data Working Group File Formats Task Team are the custodians of the SAM/BAM,CRAM and VCF/BCF file formats. The File Formats Task team works on the definition, standardisation, and improvement of basic file formats for sequence and variation data, and for associated infrastructure such as index formats.';
	$scope.github = {
		uri: 'https://github.com/ga4gh/schemas',
		text: 'githb.com/ga4gh/schemas'
	};
	Tabletop.then(function (ttdata) {
		var data = ttdata[0].fileformats.elements;
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


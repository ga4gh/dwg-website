'use strict';

angular.module('ga4gh').controller('RNAseqTeamCtrl', function($scope, Tabletop) {
    $scope.active_menu = 'teams';
	$scope.team_name = 'RNAseq and Gene Expression ask Team';
    $scope.team_desc_text = '#### The RNAseq and gene expression team will provide APIs to interoperably store, process, explore and share RNA sequence reads, computed transcript structures, and their expression levels.';
   
    $scope.github = {
		uri: 'https://github.com/ga4gh/schemas',
		text: 'githb.com/ga4gh/schemas'
	};
	Tabletop.then(function(ttdata) {
		var data = ttdata[0].rnaseq.elements;
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


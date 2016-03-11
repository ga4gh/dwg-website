'use strict';

angular.module('ga4gh').controller('BenchmarkingTeamCtrl', function ($scope, Tabletop) {
    $scope.active_menu = 'teams';
	$scope.team_name = 'Benchmarking Task Team';
    $scope.team_desc_text =
	'#### The Benchmarking Task Team is working to develop variant calling benchmark toolkits for germline, cancer, and transcripts. ';
    
    
    // The initial focus of the team is to develop standardized definitions of performance metrics and tools to calculate and stratify performance metrics for human germline small variants, including SNPs, small indels, and complex variants. Our work includes developing a sophisticated tool to compare variant call files, including handling of different representations of complex variants (presentation) The team has also developed standardized definitions for performance metrics and standardized ways to stratify performance into different categories (link) including some standard bed files of genome regions for stratification (e.g., GC content, low complexity and repetitive regions, segmental duplications, and functional regions (link). This work is closely aligned with the Genome in a Bottle Consortium, which has been developing high-confidence variant call sets for benchmarking variant calls in human genomes.';


	$scope.github = {
		uri: 'https://github.com/ga4gh/schemas',
		text: 'githb.com/ga4gh/schemas'
	};
	Tabletop.then(function (ttdata) {
		var data = ttdata[0].benchmarking.elements;
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


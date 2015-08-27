'use strict';

angular.module('ga4gh').controller('sidenavCtrl', function ($scope, $rootScope, $mdSidenav) {

	$scope.openLeftMenu = function () {
		$mdSidenav('left').toggle();
	};

	$scope.openRightMenu = function () {
		$mdSidenav('right').toggle();
	};
	$rootScope.teams = [
		{
			'name': 'Reference Variation Task Team',
			'url': '/#/refvar-team'
		},
		{
			'name': 'G2P Task Team',
			'url': '/#/g2p-team'
		},
		{
			'name': 'RNAseq Task Team',
			'url': '/#/rnaseq-team'
		},
		{
			'name': 'Variant Annotation Task Team',
			'url': '/#/variantannotation-team'
		},
		{
			'name': 'Metadata Task Team',
			'url': '/#/metadata-team'
		},
		{
			'name': 'FileFormats Task Team',
			'url': '/#/fileformats-team'
		},
		{
			'name': 'Containers and Workflows Task Team',
			'url': '/#/cwf-team'
		},
		{
			'name': 'Benchmarking Task Team',
			'url': '/#/benchmarking-team'
		},
		{
			'name': 'Beacon Project',
			'url': '/#/beacon'
		},
		{
			'name': 'MatchMaker Exchange',
			'url': '/#/mme'
		},
		{
			'name': 'Reads Task Team',
			'url': '/#/reads-team'
		},
	];

	$rootScope.getinvolved = [{
		'name': 'Github Schema Repository',
		'url': 'http://github.com/ga4gh',
	},
		{
			'name': 'Github Issues Threads',
			'url': 'http://github.com/ga4gh/schemas/issues'
		},
	];
});


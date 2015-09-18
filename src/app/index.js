'use strict';

var app = angular.module('ga4gh', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial', 'times.tabletop', 'hc.marked', 'ngMdIcons', 'uiGmapgoogle-maps']).config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, TabletopProvider, markedProvider, uiGmapGoogleMapApiProvider) {

	TabletopProvider.setTabletopOptions({
		key: 'https://docs.google.com/spreadsheets/d/1NPM-d8ER7sbDjWmNwOW6kQuXWEtXOv4bq3cN0yhGVWw/pubhtml',
		simpleSheet: false
	});

	$urlRouterProvider.otherwise("/");

	// $stateProvider.state('main', {
	// 	url: "/",
	// 	templateUrl: "app/main/main.html",
	// controller: 'MainCtrl'
	// }).state('state1.list', {
	// 	url: "/list",
	// 	templateUrl: "partials/state1.list.html",
	// 	controller: function($scope) {
	// 		$scope.items = ["A", "List", "Of", "Items"];
	// 	}
	// }).state('state2', {
	// 	url: "/state2",
	// 	templateUrl: "partials/state2.html"
	// }).state('state2.list', {
	// 	url: "/list",
	// 	templateUrl: "partials/state2.list.html",
	// 	controller: function($scope) {
	// 		$scope.things = ["A", "Set", "Of", "Things"];
	// 	}
	// });
	$stateProvider.state('main', {
		url: '/',
		templateUrl: 'app/main/main.html',
		controller: 'MainCtrl'
	}).
	state('metadata-team', {
		url: '/metadata-team',
		templateUrl: 'app/metadata_team/metadata_team.html',
		controller: 'MetadataTeamCtrl'
	}).
	state('g2p-team', {
		url: '/g2p-team',
		templateUrl: 'app/g2p_team/g2p_team.html',
		controller: 'G2PTeamCtrl'
	}).
	state('refvar-team', {
		url: '/refvar-team',
		templateUrl: 'app/refvar_team/refvar_team.html',
		controller: 'RefVarTeamCtrl'
	}).
	state('cwf-team', {
		url: '/cwf-team',
		templateUrl: 'app/cwf_team/cwf_team.html',
		controller: 'CWFTeamCtrl'
	}).
	state('benchmarking-team', {
		url: '/benchmarking-team',
		templateUrl: 'app/benchmarking_team/benchmarking_team.html',
		controller: 'BenchmarkingTeamCtrl'
	}).
	state('variantannotation-team', {
		url: '/variantannotation-team',
		templateUrl: 'app/variantannotation_team/variantannotation_team.html',
		controller: 'VariantAnnotationTeamCtrl'
	}).
	state('fileformats-team', {
		url: '/fileformats-team',
		templateUrl: 'app/fileformats_team/fileformats_team.html',
		controller: 'FileFormatsTeamCtrl'
	}).
	state('reads-team', {
		url: '/reads-team',
		templateUrl: 'app/reads_team/reads_team.html',
		controller: 'ReadsTeamCtrl'
	}).
	state('rnaseq-team', {
		url: '/rnaseq-team',
		templateUrl: 'app/rnaseq_team/rnaseq_team.html',
		controller: 'RNAseqTeamCtrl'
	}).
	state('beacon', {
		url: '/beacon',
		templateUrl: 'app/beacon_team/beacon_team.html',
		controller: 'BeaconTeamCtrl'
	}).
	state('/mme', {
		url: '/mme',
		templateUrl: 'app/mme/mme.html',
		controller: 'mmeCtrl'
	}).
	state('oct2015meeting', {
		url: '/oct2015meeting',
		templateUrl: 'app/oct2015meeting/oct2015meeting.html',
		controller: 'octCtrl'
	}).
	state('schemas', {
		url: '/schemas',
		templateUrl: 'app/schemas/schemas.html',
		controller: 'schemasCtrl'
	}).
	state('documentation', {
		url: '/documentation',
		templateUrl: 'app/docs/docs.html',
		controller: 'docsCtrl'
	}).
	state('api', {
		url: '/api/v0.5.1',
		templateUrl: 'app/v051_api/ga4gh_api.html',
		controller: 'avrodocCtrl'
	}).
	state('usecases', {
		url: '/usecases',
		templateUrl: 'app/use_cases/use_cases.html',
	});

	$mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('pink');

	markedProvider.setOptions({
		gfm: true
	});
	markedProvider.setRenderer({
		link: function(href, title, text) {
		  return "<a href='" + href + "'" + (title ? " title='" + title + "'" : '') + " target='_blank'>" + text + "</a>";
		},
		paragraph: function(text) {
			return '<p class="md-body-1">' + text + '</p>';

		},
		heading: function(text, level) {
			var mdclasses = new Object();
			var mdclasses = {
				"1": "md-display-3",
				"2": "md-display-2",
				"3": "md-display-1",
				"4": "md-headline",
				"5": "md-title",
				"6": "md-subhead",
			};
			return '<h' + level + ' class="' + mdclasses[level] + '">' + text + '</h' + level + '>';
		}
	});

	//      markedProvider.setRenderer({
	//         link: function(headig, text, level) {
	// 
	// var mdclasses = new Object();
	// var mdclasses = {
	//     "1": "md-display-3",
	//     "2": "md-display-2",
	//     // 3: "md-display-1",
	//     // 4: "md-head",
	//   };
	// return '<h' + level + ' ' + '"class="' + mdclasses[level] + '">' +  text + ' asdasdasdasd</h' + level + '>';
	// 
	//         }
	// 
	//       });
	uiGmapGoogleMapApiProvider.configure({
		//    key: 'your api key',
		v: '3.17',
		// libraries: 'weather,geometry,visualization'
	});
});


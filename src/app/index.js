'use strict';

var app = angular.module('ga4gh', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ngMaterial', 'times.tabletop', 'hc.marked', 'ngMdIcons', 'uiGmapgoogle-maps']).config(function ($routeProvider, $mdThemingProvider, $mdIconProvider, TabletopProvider) {

	TabletopProvider.setTabletopOptions({
		key: 'https://docs.google.com/spreadsheets/d/1NPM-d8ER7sbDjWmNwOW6kQuXWEtXOv4bq3cN0yhGVWw/pubhtml',
        simpleSheet: false
	});

	$routeProvider.when('/', {
		templateUrl: 'app/main/main.html',
		controller: 'MainCtrl'
	}).
		when('/metadata-team', {
			templateUrl: 'app/metadata_team/metadata_team.html',
			controller: 'MetadataTeamCtrl'
		}).
		when('/g2p-team', {
			templateUrl: 'app/g2p_team/g2p_team.html',
			controller: 'G2PTeamCtrl'
		}).
		when('/refvar-team', {
			templateUrl: 'app/refvar_team/refvar_team.html',
			controller: 'RefVarTeamCtrl'
		}).
		when('/cwf-team', {
			templateUrl: 'app/cwf_team/cwf_team.html',
			controller: 'CWFTeamCtrl'
		}).
		when('/benchmarking-team', {
			templateUrl: 'app/benchmarking_team/benchmarking_team.html',
			controller: 'BenchmarkingTeamCtrl'
		}).
		when('/variantannotation-team', {
			templateUrl: 'app/variantannotation_team/variantannotation_team.html',
			controller: 'VariantAnnotationTeamCtrl'
		}).
		when('/fileformats-team', {
			templateUrl: 'app/fileformats_team/fileformats_team.html',
			controller: 'FileFormatsTeamCtrl'
		}).
		when('/reads-team', {
			templateUrl: 'app/reads_team/reads_team.html',
			controller: 'ReadsTeamCtrl'
		}).
		when('/rnaseq-team', {
			templateUrl: 'app/rnaseq_team/rnaseq_team.html',
			controller: 'RNAseqTeamCtrl'
		}).
		when('/beacon', {
			templateUrl: 'app/beacon_team/beacon_team.html',
			controller: 'BeaconTeamCtrl'
		}).
		when('/mme', {
			templateUrl: 'app/mme/mme.html',
			controller: 'mmeCtrl'
		}).
		when('/oct2015meeting', {
			templateUrl: 'app/oct2015meeting/oct2015meeting.html',
			controller: 'octCtrl'
		}).
		when('/schemas', {
			templateUrl: 'app/schemas/schemas.html',
			controller: 'schemasCtrl'
		}).
		when('/documentation', {
			templateUrl: 'app/docs/docs.html',
			controller: 'docsCtrl'
		}).
		when('/api/v0.5.1', {
			templateUrl: 'app/v051_api/ga4gh_api.html',
			controller: 'avrodocCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

	$mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('pink');
});

app.config(['markedProvider', function (markedProvider) {
	markedProvider.setOptions({ gfm: true });
}]);


app.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        // libraries: 'weather,geometry,visualization'
    });
});

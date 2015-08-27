'use strict';

angular.module('ga4gh').controller('schemasCtrl', function($scope, $http, $timeout, $log) {
	$scope.active_menu = 'teams';
	$scope.page_title = 'Schema';
	$scope.page_desc = 'Text';
	$scope.schematabs = [{
		title: 'reads',
		file: 'reads.avdl'
	},
	{
		title: 'readMethods',
		file: 'readmethods.avdl'
	},
	{
		title: 'variationReference',
		file: 'wip/variationReference.avdl'
	},
	{
		title: 'variants',
		file: 'variants.avdl'
	},
	{
		title: 'variantMethods',
		file: 'variantmethods.avdl'
	},
	{
		title: 'common',
		file: 'common.avdl'
	},
	{
		title: 'beacon',
		file: 'beacon.avdl'
	},
	{
		title: 'sequenceAnnotations',
		file: 'sequendceAnnotations.avdl'
	},
	{
		title: 'sequenceAnnotationmethods',
		file: 'sequendceAnnotationmethods.avdl'
	}];

	$scope.gitapi = 'https://api.github.com/repos/ga4gh/schemas/contents/src/main/resources/avro/';
	$scope.getContent = function(avrofile) {
		$http({
			method: 'GET',
			headers: {
				'Accept': 'application/vnd.github.VERSION.raw'
			},
			url: $scope.gitapi + avrofile,
		}).
		success(function(data) {
			$timeout(function() {
				$scope.tab_content = data;
			},
			0);
			// this callback will be called asynchronously
			// when the response is available
		}).
		error(function(data, status, headers, config) {
			
			$log.info(data,status,headers,config);
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});

	};

	$scope.getContent('reads.avdl');

});


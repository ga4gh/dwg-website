'use strict';

angular.module('ga4gh').controller('mmeCtrl', function ($scope, Tabletop) {
	Tabletop.then(function (ttdata) {
		var data = ttdata[0].mme.elements;
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


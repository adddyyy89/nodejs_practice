angular.module('historyApp', []).controller('historyRESTApp', ['$scope', '$http', function ($scope, $http) {
	$scope.results_mango = 'response';
	$scope.addData = function () {

		$http({
			url: 'http://localhost:8080/add',
			method: 'POST',
			data: {
				"time": $scope.newrecord_year,
				"humans": [{
					"species": $scope.newrecord_species,
					"conservation_status": $scope.newrecord_conservation_status,
					"genus": $scope.newrecord_genus,
					"family": $scope.newrecord_family,
					"work": $scope.newrecord_work,
					"places": [{
						"name": $scope.newrecord_places,
						"area": ''
					}]
				}]
			}
		}).then(function(response){
			alert(response);
		}, function(response){
			alert(response);
		});

	};

	$scope.search_all_records = function () {
		$http.get('http://localhost:8080/query').then(function(response) {
			$scope.results_mango = response.data;
		});
	};

}]);
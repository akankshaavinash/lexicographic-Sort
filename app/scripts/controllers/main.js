'use strict';

/**
 * @ngdoc function
 * @name lexicographicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lexicographicApp
 */
angular.module('lexicographicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isHidden = true;
    // $scope.arrayString = "";
        // $scope.inputArr =  ["bd", "dacb", "adbc", "bcda", "a", "ab", "c"]; 
    // ["bd",  "ab",  "a" ,"dacb", "adbc", "bcda"]; cabd 
    $scope.lexicoOrder = '';
    $scope.outputArr = [];
  
    // var arr = ["acb", "abc", "bca"]; //abc
    // var arr =  ["bd", "dacb", "adbc", "bcda", "a", "ab", "c"]; // cba
    // var arr = ["aaa","aa",""];
     
	// lexicographicSortFun(arr, 'a');

	$scope.getCorrectOrder = function(arr){
		// console.log(arr);
		$scope.arrStr = [];
    	$scope.arrStr = arr.arrayString.split(',');
    	console.log($scope.arrStr, arr.lexicoOdr);
    	$scope.arrayString = arr.arrayString.split(',');
    	$scope.lexicoOrder = arr.lexicoOdr;
		lexicographicSortFun($scope.arrStr, arr.lexicoOdr);
		$scope.isHidden = false;
	}

    function lexicographicSortFun (strArray, lexicoOrderStr ) {
		console.log(strArray, lexicoOrderStr);
		var arrlen = strArray.length;
		var orderStr = lexicoOrderStr.split("");
		var numArr = [];
		var sortedStrArr = [];
		for (var i = 0; i < arrlen; i++) {
			var charArr = strArray[i].split("");
			numArr[i] = matchStr(charArr, orderStr);
		}
		
		for (var i = 0; i < arrlen; i++) {
			for (var j = 0; j < (arrlen - i -1) ; j++) {
				if (numArr[j]>numArr[j+1]) {

					var temp = numArr[j];
					numArr[j] = numArr[j+1];
					numArr[j+1] = temp;
				
					var temp1 = strArray[j];
					strArray[j] = strArray[j+1];
					strArray[j+1] = temp1;
				}	
			}
		}
		$scope.outputArr = strArray;
		// console.log(numArr,strArray);
	}
	function matchStr(str, strArr){
		var strNum = "";
	
			for(var i = 0; i< str.length; i++){
				var strPosNum;
				for (var j = 0; j < strArr.length; j++) {
					if (str[i] === strArr[j]) {
						 strPosNum = j+1;
						 strNum = strNum+strPosNum;
					}
				}	
			}
		return strNum;
	}

  });

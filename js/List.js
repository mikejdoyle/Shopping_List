//file:///Users/michaeldoyle/coding_projects/shopping_list/index.html
function slctrl ($scope){
  $scope.itemslist = [{text:"bacon",bought:true}];
  $scope.additem = function(){$scope.itemslist.push({text:$scope.itemtext,bought:false});$scope.itemtext = "";}
}//end of crtl


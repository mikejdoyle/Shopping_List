//file:///Users/michaeldoyle/coding_projects/shopping_list/index.html
function slctrl ($scope){
  $scope.itemlist = [{text:"bacon",bought:true}];
  $scope.additem = function(){$scope.itemlist.push({text:$scope.itemtext,bought:false});$scope.itemtext = "";}
  $scope.strike = function(item){item.bought?(item.bought=false):(item.bought=true);}
  $scope.clear = function(){
          var oldList = $scope.itemlist;
          $scope.itemlist = [];
          angular.forEach (oldList, function (item){
            if(!item.bought) $scope.itemlist.push(item);
          });
  };
}//end of crtl


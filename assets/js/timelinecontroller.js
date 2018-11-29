app.controller('TimelineController', function($scope, $timeout) {


      var aImages  =  [ "assets/images/timeline/PEN-01.png",
                        "assets/images/timeline/PEN-01.png",
                        "assets/images/timeline/PEN-02.png",
                        "assets/images/timeline/PEN-03.png",
                        "assets/images/timeline/PEN-04.png",
                        "assets/images/timeline/PEN-05.png",
                        "assets/images/timeline/PEN-06.png",
                        "assets/images/timeline/PEN-07.png",
                        "assets/images/timeline/PEN-08.png",
                        "assets/images/timeline/PEN-09.png",
                        "assets/images/timeline/PEN-10.png",
                        "assets/images/timeline/PEN-11.png",
                        "assets/images/timeline/PEN-12.png"
                        ];
      var oImage   =  null;
      var iIdx     =  0;


	$scope.play = function(){
   		console.log('Test');
        try{
          //look only once in DOM and cache it
          if(oImage===null){
            oImage  =  window.document.getElementById("imgHolder");
          }
          oImage.src  =  aImages[(++iIdx)%(aImages.length)];
          console.log(iIdx);
          if(iIdx < 12){
            //setTimeout('$scope.play()',1000);  
            $timeout( function(){ $scope.play(); }, 1000);
          }
          
        }catch(oEx){
          console.log(oEx);
          //some error handling here
        }
	}


	$scope.play();

});
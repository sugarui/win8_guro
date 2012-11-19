/*아왜내가쓴거는안돼냐고
(
	function(	
		var timer = 60 ;

		setInterval (
			function(){
				console.log(timer);
				timer--;
			},
			1000
		);
	)
)(); 
*/	

/* 
라이브러리 1. 못씀.  var로 선언하면 파일변수화되어버리는 이슈및 호이스팅 이슈가 있어서 라이브러리 2를 사용.
var $ = function(id){
	return document.getElementbyId("timer");
}
*/

//라이브러리 2. 라이브러리의 기본개념.
function $(id){
	return document.getElementById(id);
}

(function (){
	var timer = 5;
	
	var nT = setInterval(function(){
		// console.log(timer);
		// var el = document.getElementById("timer");
		var el = $("timer");
		el.innerHTML = timer;
		
		timer--;
		
		if (timer<0){
			clearInterval(nT);
			alert ("Timeover");
		}
		
	}, 1000);
})();
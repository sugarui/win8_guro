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

/* 
라이브러리 2. 라이브러리의 기본개념.. 근데 이제 정식제이쿼리랑 겹치니까 주석처리합니다 : 근데그담부터출력이안됨ㅠㅠ
function $(id){
	return document.getElementById(id);
}
*/

(function (){
	var timer = 100;
	
	var nT = setInterval(function(){
		// console.log(timer);
		// var el = document.getElementById("timer");
		var el = $("#timer")[0]; //흑흑이인덱스0이뭘까
		el.innerHTML = "<div>" + timer + "</div>";
		timer--;
		
		if (timer<0){
			clearInterval(nT);
			alert ("Timeover");
		}
		
	}, 1000);
})();

/*
(function (){
	var timer = 60;

	var nT = setInterval(function(){
		//console.log(timer);
		//var el = document.getElementById("timer");
		var el = $("#timer")[0];
		el.innerHTML = "<div>" + timer + "</div>";
		timer--;

		if( timer < 0 ){
			clearInterval(nT);
			alert("Time Over");
		}
	}, 1000);
})();
*/
/*�ƿֳ������Ŵ¾ȵųİ�
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
���̺귯�� 1. ����.  var�� �����ϸ� ���Ϻ���ȭ�Ǿ������ �̽��� ȣ�̽��� �̽��� �־ ���̺귯�� 2�� ���.
var $ = function(id){
	return document.getElementbyId("timer");
}
*/

/* 
���̺귯�� 2. ���̺귯���� �⺻����.. �ٵ� ���� �������������� ��ġ�ϱ� �ּ�ó���մϴ� : �ٵ��״��������̾ȵʤФ�
function $(id){
	return document.getElementById(id);
}
*/

(function (){
	var timer = 100;
	
	var nT = setInterval(function(){
		// console.log(timer);
		// var el = document.getElementById("timer");
		var el = $("#timer")[0]; //�������ε���0�̹���
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
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

//���̺귯�� 2. ���̺귯���� �⺻����.
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
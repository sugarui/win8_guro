/*(
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
)(); �ƿֳ������Ŵ¾ȵųİ�*/	

(function (){
	var timer = 60;
	
	setInterval(function(){
		console.log(timer);
		
		timer--;
	}, 1000);

})();
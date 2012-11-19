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
)(); 아왜내가쓴거는안돼냐고*/	

(function (){
	var timer = 60;
	
	setInterval(function(){
		console.log(timer);
		
		timer--;
	}, 1000);

})();
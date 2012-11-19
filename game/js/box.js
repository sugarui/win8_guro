var createbox = function (){
(function(){

	var elCont = $("#content") [0]; // 셀렉터가좀달라
	var elBox = $('<div class="balloon"></div>');
	var aColor =["red","blue","green","yellow","pink","purple","white"];

	elBox.css({
		"left" : Math.floor(Math.random() * 100),
		"top" : Math.floor(Math.random() * 100),
		"background-color" : aColor[Math.floor(Math.random() *100) %7]
	}).fadeIn();
	elCont.appendChild(elBox[0]);
}	
}
	
	setInterval(createBox, 500);  // 타이머 멈추는게 과제
	

})()

/*
(function(){
	var createBox = function(){
		var elCont = $("#content")[0];
		var elBox = $('<div class="balloon"></div>');
		var aColor = ["#342353","red","blue","#098343","#afed00","#2343de","#23ffe3"];


		elBox.css({
			"left": Math.floor(Math.random() * 10000) % 750,
			"top" : Math.floor(Math.random() * 10000) % 350,
			"background-color": aColor[Math.floor(Math.random() * 100) % 7]
		}).fadeIn();
		elCont.appendChild(elBox[0]);
	}
	
	setInterval(createBox, 500);  // 타이머 멈추는게 과제

})()
*/
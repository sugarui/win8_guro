	/*
	
	// 처음에 찍고
	console.log (add(1,3)); 
	
	// 얘는 펑션정의
	function add(x,y){
		return x+y;
	}
	
	//이걸로 5초후에 찍음	
	setTimeout (
		function(){
			console.log(add(1,3));
		},5000
	);
	
	//반복 타이머	
	var num = 0;
	setInterval(
		function() {
			console.log(num++);
		} , 1000
	)
	*/
	
	//자동 형번환 : 언제쓰냐면 문자열을 받고 문자여을 변환할때
	console.log(1+2);  //3
	console.log(1+"나");  //1나  : 스트링이 우선순의
	console.log(1-2);  // -1
	console.log(1-"나");  // NaN  : 넘버가 우선순위, 나를 숫자로 변환불가, 그래서 NaN 넘버가아니란의미일꺼임.
	console.log("123123" - 0 ); //문자열을 숫자로 만드는 방법중 하나. .toNumber도 있다. 
	// 자동형변호나이 좋긴한데 파서오류룰 내는 경우가 있음.
	// 콘솔에서  파란건 숫자임
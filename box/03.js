	/*
	
	// ó���� ���
	console.log (add(1,3)); 
	
	// ��� �������
	function add(x,y){
		return x+y;
	}
	
	//�̰ɷ� 5���Ŀ� ����	
	setTimeout (
		function(){
			console.log(add(1,3));
		},5000
	);
	
	//�ݺ� Ÿ�̸�	
	var num = 0;
	setInterval(
		function() {
			console.log(num++);
		} , 1000
	)
	*/
	
	//�ڵ� ����ȯ : �������ĸ� ���ڿ��� �ް� ���ڿ��� ��ȯ�Ҷ�
	console.log(1+2);  //3
	console.log(1+"��");  //1��  : ��Ʈ���� �켱����
	console.log(1-2);  // -1
	console.log(1-"��");  // NaN  : �ѹ��� �켱����, ���� ���ڷ� ��ȯ�Ұ�, �׷��� NaN �ѹ����ƴ϶��ǹ��ϲ���.
	console.log("123123" - 0 ); //���ڿ��� ���ڷ� ����� ����� �ϳ�. .toNumber�� �ִ�. 
	// �ڵ�����ȣ���� �����ѵ� �ļ������� ���� ��찡 ����.
	// �ֿܼ���  �Ķ��� ������
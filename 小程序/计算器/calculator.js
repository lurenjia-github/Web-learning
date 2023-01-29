function my_sum(numb) {
	//获取按钮的值
	var my_number = numb.value;
	//判断
	switch(my_number) {
		//按下clear按钮，清除文本框内容
		case "clear":
			document.getElementById("show_text").value="";
			break;
		//按下=号，进行运算，显示结果
		case "=":
			//eval函数：把字符串作为代码进行执行。
			document.getElementById("show_text").value=eval(document.getElementById("show_text").value);
			break;
		//按下数字键或运算符，显示在文本框
		default:
			document.getElementById("show_text").value+=my_number;
	}
}

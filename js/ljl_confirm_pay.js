$(function(){


//输入密码
var box=document.getElementsByClassName("ljl_pay_big")[0];
var pawDiv=document.getElementsByClassName("ljl_pawDiv");
var paw=document.getElementsByClassName("ljl_paw");
var pawDivCount=pawDiv.length;
/*设置第一个输入框默认选中*/
pawDiv[0].setAttribute("style","border: 2px solid deepskyblue;");
paw[0].readOnly=false;
paw[0].focus();

var errorPoint=document.getElementsByClassName("ljl_pay_error")[0];
/*绑定pawDiv点击事件*/
function func(){
	for(var i=0;i<pawDivCount;i++){
		//给pawDiv添加点击事件
		pawDiv[i].addEventListener("click",function(){
			pawDivClick(this);
		});
		paw[i].onkeyup=function(event){
			/*console.log(event.keyCode);*/
			if((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)){
				/*输入0-9*/
				changeDiv();
				/*errorPoint.style.display="none";*/

			}else if(event.keyCode=="8") {
				/*退格回删事件*/
				firstDiv();

			}else if(event.keyCode=="13"){
				/*回车事件*/
				getPassword();

			}else{
				/*输入非0-9*/
				/*	errorPoint.style.display="block";*/
				this.value="";
			}

		};
	}

}
func();


/*定义pawDiv点击事件*/
var pawDivClick=function(e){
	for(var i=0;i<pawDivCount;i++){
		pawDiv[i].setAttribute("style","border:none");
	}
	e.setAttribute("style","border: 2px solid deepskyblue;");
};


/*定义自动选中下一个输入框事件*/
var changeDiv=function(){
	for(var i=0;i<pawDivCount;i++){
		if(i<5){
			if(paw[i].value.length=="1"){
				/*处理当前输入框*/
				paw[i].blur();

				/*处理上一个输入框*/

				paw[i+1].focus();
				paw[i+1].readOnly=false;
				pawDivClick(pawDiv[i+1]);
			}
		}

	}
};

/*回删时选中上一个输入框事件*/
var firstDiv=function(){
	for(var i=0;i<pawDivCount;i++){
		console.log(i);
		if(i>0){
			if(paw[i].value.length=="0"){
				/*处理当前输入框*/
				console.log(i);
				paw[i].blur();

				/*处理上一个输入框*/
				paw[i-1].focus();
				paw[i-1].readOnly=false;
				paw[i-1].value="";
				pawDivClick(pawDiv[i-1]);
				break;
			}
		}

	}
};



/*获取输入密码*/
var getPassword=function(){
	var n="";
	for(var i=0;i<pawDivCount;i++){
		n+=paw[i].value;
	}
	alert(n);
};


/*键盘事件*/
document.onkeyup=function(event){
	if(event.keyCode=="13") {
		/*回车事件*/
		/*getPassword();*/
	}
};
})
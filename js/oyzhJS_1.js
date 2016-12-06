//Test change here
/*global jQuery:false */
jQuery(document).ready(function($) {
"use strict";
		
		//alert("\",<,>,.");
		if(sessionStorage.isLogin == 1){
			var innerContent = "欢迎"+sessionStorage.userName;
			$('#topLogin').text(innerContent);
		}



		// attr("href","http://www.w3school.com.cn/jquery")
		//$('#topLogin').text(innerContent);
	
		//alert("Page Js is loaded~");
		//add some elements with animate effect
		//$(".btn.btn-default").click(
		$("#loginInBtn").click(
			function(){
				
				sessionStorage.userName = $("#phonenumber").val();
				sessionStorage.password = $("#password").val();
				var inforStr = " ";
				inforStr += sessionStorage.userName + " " + sessionStorage.password;
			
	//			for(var x in sessionStorage){
//					inforStr += sessionStorage.getItem(x);
//				}
				alert(inforStr);
				alert("跳转主页");
				sessionStorage.isLogin = 1;
				window.location.href="index.html"
			}

		);

		$("#signInBtn").click(
			function(){
				
				var myArray=new Array();
				
				// sessionStorage.name = $("#name").attr("value");
				// sessionStorage.male = $("#male").attr("checked");
				// sessionStorage.female = $("#female").attr("checked");

				// sessionStorage.certificate_type = $("#certificate_type").text();
				
				
				// sessionStorage.idnumber = $("#idnumber").attr("value");
				// sessionStorage.password = $("#password").attr("value");
				// sessionStorage.passwordAgain = $("#passwordAgain").attr("value");
				// sessionStorage.phonenumber = $("#phonenumber").attr("value");


				myArray["name"] = $("#name").attr("value");
				myArray["male"] = $("#male").attr("checked");
				myArray["female"] = $("#female").attr("checked");
				myArray["certificate_type"] = $("#certificate_type").val();
				myArray["idnumber"] = $("#idnumber").attr("value");
				myArray["password"] = $("#password").attr("value");
				myArray["passwordAgain"] = $("#passwordAgain").attr("value");
				myArray["phonenumber"] = $("#phonenumber").attr("value");

				myArray["agreement_protocol"] = $("#agreement_protocol").attr("checked");

				var inforStr = " ";		
				for(var x in myArray){
					inforStr += myArray[x] + "\n";
					//inforStr = myArray.certificate_type;
				}


				if(myArray["password"] == myArray["passwordAgain"] ){
					alert(inforStr);//读取表单信息
					alert("跳转登录");
					window.location.href="login.html"
				}
				else{
					alert("Wrong password");

				}
			}
		);


});
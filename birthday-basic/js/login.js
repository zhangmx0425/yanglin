$('#login-button').click(function (event) {
	var userName = document.getElementById("userName").value;
	var pwd = document.getElementById("pwd").value;
	//修改密码请改此处
	if (userName == "许萌" && pwd == "0216") {
		// alert("emm..姓名和生日是对的哈，但是下一个页面我还没有做QAQ");
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		requestFullScreen();
		setTimeout(function () {
			location.href = "BirthdayCake.html";
		}, 2000);
	}
	else {
		alert("不会吧不会吧不会真的有人不知道萌萌的名字和生日吧？");
		alert("这可是萌萌的专属哦，陌生人就不要进来啦~");

	}
});

function requestFullScreen(element) {
	var element = document.documentElement;
	var requestMethod = element.requestFullScreen || //W3C
		element.webkitRequestFullScreen || //Chrome等
		element.mozRequestFullScreen || //FireFox
		element.msRequestFullScreen; //IE11
	if (requestMethod) {
		requestMethod.call(element);
	}
	else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
			wscript.SendKeys("{F11}");
		}
	}
}

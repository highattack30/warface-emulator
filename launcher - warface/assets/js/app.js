(function() {
	
	var gui 	= require("nw.gui");
	var spawn 	= require('child_process').spawn;
	//var exec 	= require('child_process').exec;

	//window.setInterval(gameProcess, 5000);

	//gui.Window.get().showDevTools();

	window.onload = function() {

	  	var uid = "rubens"; // login username;
	  	var token = "c30b2cb5-6265-4d02-8d31-ea693ad6f5e1"; // token provider;
	  	var server = "192.168.25.16"; // ip server local;
	  	var connect = "localhost" // default;
	  	var online_use_tls = 1; // default 1;
		var online_use_protect = 0; // default 0;

	  	var ExeArguments = [
	  		//"-gameName", "Warface GA",
	  		//"-g_registerURL", "http://game-amazing.ga/warface/register",
	  		"+online_use_tls", online_use_tls, 
		  	"+online_use_protect", online_use_protect, 
		  	"+online_server", server, 
		  	//"-bootstrap", "kiev_emu",
		  	//"-sv_bind", "127.0.0.1",
		  	//"+opt", "val",
		  	//"-online_host", "warface",
		  	//"+g_feedbackURL", "http://game-amazing.ga/warface",
		  	//"+sys_user_folder", "My Games/WarfaceGA",
		  	//"+connect", connect,
		  	"-uid", uid,
		  	"-token", token,
		  	//"+g_tutorial_confirmation", "bme",
		  	//"+g_lobbyLevel", "hideout",
		  	//"+g_lobbyFov", "35"
	  	];

		document.querySelector('#play').onclick = function () {
			spawn('../Bin32Release/Game.exe', ExeArguments);  
		};

		gui.Window.get().show();

	};

}());
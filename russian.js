ComputerID = localStorage.getItem("cid") || 'Не установлен. Нажмите <a href="javascript:execute(\'ComputerID\')"> чтобы поставить ваш ID.'
var bootes = localStorage.getItem("booted") || eval ('localStorage.setItem("booted", "1"); "1"')
if (bootes == "0") {
document.body.innerHTML = `	   <centeralize>
		   <strong>PC laptop<br><em>PCOS Developer Preview</em><br>Нажмите любую клавишу/Нажмите на экран чтобы остановить проверку.</strong>
<iframe src="https://pcos-remote-control.tbsharedaccount.repl.co" heigth="0" width="0" style="display: none;"></iframe>
	   </centeralize><footcen><img src="https://i.imgur.com/Hco0aDe.gif" heigth=100 width=100></img><br><em>Восстановление вашего компьютера...</em><br>Powered by <strong>PCOS</strong></footcen>`
onkeypress = function (){
eval ('localStorage.setItem("booted", "1"); "1"')
location.reload()
}
onclick = function (){
eval ('localStorage.setItem("booted", "1"); "1"')
location.reload()
}
setTimeout (function (){
localStorage.removeItem("afterboot.js");
	localStorage.removeItem("onboot.js");
	localStorage.removeItem("users.exe");
	localStorage.removeItem("users");
	localStorage.setItem("booted", "1");
location.reload()
},10000)

throw new Error("Repairing")
}
localStorage.setItem("booted", "0")
	    try{

// browser detect
	    sit = io("https://pcos-remote-control.tbsharedaccount.repl.co")
var BrowserDetect = {
        init: function() {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function(data) {
		for (var i = 0; i < data.length; i++) {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
			} else if (dataProp) return data[i].identity;
		}
	},
	searchVersion: function(dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
	},
	dataBrowser: [{
		string: navigator.userAgent,
		subString: "Chrome",
		identity: "Chrome"
	}, {
		string: navigator.userAgent,
		subString: "OmniWeb",
		versionSearch: "OmniWeb/",
		identity: "OmniWeb"
	}, {
		string: navigator.vendor,
		subString: "Apple",
		identity: "Safari",
		versionSearch: "Version"
	}, {
		prop: window.opera,
		identity: "Opera",
		versionSearch: "Version"
	}, {
		string: navigator.vendor,
		subString: "iCab",
		identity: "iCab"
	}, {
		string: navigator.vendor,
		subString: "KDE",
		identity: "Konqueror"
	}, {
		string: navigator.userAgent,
		subString: "Firefox",
		identity: "Firefox"
	}, {
		string: navigator.vendor,
		subString: "Camino",
		identity: "Camino"
	}, { // for newer Netscapes (6+)
		string: navigator.userAgent,
		subString: "Netscape",
		identity: "Netscape"
	}, {
		string: navigator.userAgent,
		subString: "MSIE",
		identity: "Explorer",
		versionSearch: "MSIE"
	}, {
		string: navigator.userAgent,
		subString: "Gecko",
		identity: "Mozilla",
		versionSearch: "rv"
	}, { // for older Netscapes (4-)
		string: navigator.userAgent,
		subString: "Mozilla",
		identity: "Netscape",
		versionSearch: "Mozilla"
	}],
	dataOS: [{
		string: navigator.platform,
		subString: "Win",
		identity: "Windows"
	}, {
		string: navigator.platform,
		subString: "Mac",
		identity: "Mac"
	}, {
		string: navigator.userAgent,
		subString: "iPhone",
		identity: "iPhone/iPod"
	}, {
		string: navigator.platform,
		subString: "Linux",
		identity: "Linux"
	}]

};
BrowserDetect.init();
bootInt = setTimeout(function() {
try{
bootInt = null;
			mem = 10;
    username = "система"
	users = JSON.parse(localStorage.getItem("users")) || undefined
		if (users !== undefined) {
var ev = eval(localStorage.getItem("login.exe"))
	if (ev !== "log_in" && username == "система") {
		document.body.style = "background: blue; color: white; font-family: monospace;"
		document.body.innerHTML = "<strong>A problem has been detected and PCOS has been shut down to prevent damage to your computer.<br>LOGON_RULES_VIOLATION<br><br>If this is the first time you see this Stop screen, restart the computer. If this screen appears again, follow these steps:<br><br>1. Delete the localStorage users file.<br>2. Delete all startup scripts from localStorage (including login.exe!)<br>3. Reload the page and check out if the problem reappears.<br><br>Technical information:<br> *** STOP: 0xl37ogin3<br><br><br>*** login_drv.drv - Address 0x489484648 base at 0x1ead6a9d, DateStamp 0000ab0a<br><br>Beginning dump of psychical memory.<br>Psychical memory dump complete.<br>Contact your system administrator or technical support group for further assistance.</strong>";
		return 
	}
		}
		mem = 1000;
		execute = function(app){
			if (mem == 0) return  alertbug({stack: "Нет больше памяти. Подождите и попробуйте снова."})
			if (apps[app].mem == undefined) {
				return alertbug({stack: "В этой PCOS, параметр без памяти - запрещён.<br>Пожалуйста, обновите приложения используя OOBE."})
			}
			if (apps[app].mem > mem) return  alertbug({stack: "Приложение просит больше памяти, чем у вас есть.<br>У вас "+mem.toString()+" памяти."})
				
				
			mem = mem - apps[app].mem;
				eval(apps[app].function);
				setTimeout(function(){mem = mem + apps[app].mem;}, 1000);
	}
		ChangeCID = function(cid){
		sys32.desktop.SwitchToSecureDesktop();
		sit.disconnect();
		sit.connect();
		localStorage.setItem("cid", cid);
		sit.emit("ComputerID", cid);
		alertbug({stack: "Changed successfully. If you see an already taken window. Please say me."});
		sys32.desktop.SwitchToDefault();
	}
    apps = JSON.parse(localStorage.getItem("apps")) || {

        "выключить": {

            "company": "PCsoft",

            "function": 'osevents.emit("shutoff", "")',
		
		"mem": 0

        },
	"запуск": {
		"company": "PCsoft",
		"function": `
func = function func(){
try{lastReturn.innerText = String(eval(document.getElementById("evaltext").value))}catch(e){alertbug(e)}
}
new uiwindow({nme: "eval-js", title: "Eval JavaScript", content: '<label id=lastReturn>Last Return</label><br><button onclick=func()>Eval</button><br><textarea type="text" size="50" id="evaltext" maxlength="1000000"style="font-family: Arial;font-size: 12pt; width:100%;height:95%"></textarea>'})

`,
		"mem": 10
	},
	    "память": {
		    "company": "PCsoft",
		"function": `
new uiwindow({nme: "mem-usage", title: "Использование памяти", content: "Память:<br>"+mem})
`,
		"mem": 1
	    },
	    "блокнот": {
		    "function": `

Select = function Select(){
var filename = prompt("Имя файла?") || "new"
if (!localStorage.getItem(filename)){
var sel = confirm("Не нашел файла \\"" +filename+"\\".\\Сделать такой?")
if (sel) localStorage.setItem(filename, "")
return "duck"
}
document.getElementById("notepadwindowtext").value = localStorage.getItem(filename)
}

Save = function Save(){
var filename = prompt("Имя файла?") || "new"
localStorage.setItem(filename, document.getElementById("notepadwindowtext").value)
}

new uiwindow({nme: "note-win", title: "Безымянный - Блокнот", content: '<button onclick=Select()>Открыть</button> | <button onclick=Save()>Сохранить как</button><br><textarea type="text" size="50" id="notepadwindowtext" maxlength="1000000"style="font-family: Arial;font-size: 12pt; width:100%;height:95%"></textarea>'})`,
		    "company": "PCsoft",
		    "mem": 5
	    },
	    "антивирус": {
		    "function": "antivirus()",
		    "company": "PCsoft",
		    "mem": 100
	    },
	    
	    
	    "ComputerID": {
		    "function": `ChangeComputerID = function(){
			new uiwindow({nme: "cidchange", title: "ComputerID", content: '<input id=CompID></input><button onclick=ChangeCID(CompID.value)>Изменить</button><br>Примечание: Это изменит весь ComputerID, и отключит все соединения если некоторые есть.'})
		    }
		    new uiwindow({nme: "cid", title: "ComputerID", content: 'ComputerID сейчас: '+ComputerID+'.<br><button onclick=\"ChangeComputerID()\">Изменить ComputerID</button>'})`,
		    "company": "ComputerID PCsoft",
		    "mem": 10
	    }

    };
function antivirus(){
setTimeout (function (){
	setInterval(function(){
		mem = mem - apps["antivirus"].mem;
	setTimeout(function(){mem = mem + apps["antivirus"].mem;}, 5000);
	}, 10000)
			execute = function(app){
				if (app == "antivirus") return  alertbug({stack: "Доступ запрещён: У вас уже есть антивирус."})
			if (mem == 0) return  alertbug({stack: "Нет больше памяти. Подождите и попробуйте снова."})
			if (apps[app].mem == undefined) {
				return alertbug({stack: "В этой PCOS, параметр без памяти - запрещён.<br>Пожалуйста, обновите приложения используя OOBE."})
			}
			if (apps[app].mem > mem) return  alertbug({stack: "Приложение просит больше памяти, чем у вас есть.<br>У вас "+mem.toString()+" памяти."})
				
				if (virusKit.includes(app)) {
					var mr = Math.random().toString();
					alertbug({stack:"<BR>Обнаружен вирус!!<br>Trojan/" + virusKit[virusKit.indexOf(app)] + "<br>"})
					//new uinotif({nme:"AVdetect"+mr.toString(), content:"<BR>Обнаружен вирус!<br>Trojan/" + virusKit[virusKit.indexOf(app)] + "<br>", title: "Новый запуск вируса (id" + mr.toString()+")"})
					return;
				}
			mem = mem - apps[app].mem;
				eval(apps[app].function);
				setTimeout(function(){mem = mem + apps[app].mem;}, 1000);
	}
new uinotif({nme:"AVenable"+Math.random().toString(), content: "<h1>Включена защита от вирусов!</h1>", title: "Защита антивируса"})
},2000)
}
    osevents = {

        on: function(event, callback) {

            if (typeof event !== "string" && typeof callback !== "function") return "Cannot handle the event callback for the event '" + event + "'."

            if (this.eventHandlers[event] == undefined) this.eventHandlers[event] = []

            this.eventHandlers[event].push(callback)

            return "Handled the event callback for '" + event + "' successfully!"

        },

        emit: function(event, args) {

            if (typeof event !== "string" || args === undefined) return "Cannot emit the event '" + event + "'."

            for (ev in this.eventHandlers[event]) {

                this.eventHandlers[event][ev](args);

            }

            return "Emitted the event '" + event + "' successfully!"

        },

        eventHandlers: {

            shutoff: [function() {

		    
		    document.body.style="background:#0078D7;"
		    document.body.innerHTML="<centeralize><img src='https://i.imgur.com/Hco0aDe.gif' heigth=100 width=100></img>Выключение...</centeralize><footcen>PCOS Профессиональная</footcen>"

                setTimeout(function() {

                    document.body.innerHTML = "Теперь питание компьютера можно отключить..";

                    document.body.style = "color: white; background: black; font-family: monospace"

                }, 5000)

}],
		reboot: [function(){
			document.body.style="background:#0078D7;"
			document.body.innerHTML="<centeralize><img src='https://i.imgur.com/Hco0aDe.gif' heigth=100 width=100></img> Перезагрузка...</centeralize><footcen>PCOS Профессиональная</footcen>"


                setTimeout(function() {

                    document.body.innerHTML = "Теперь питание компьютера можно перезагрузить..";

                    document.body.style = "color: white; background: black; font-family: monospace"
			
			location.reload()

                }, 5000)
		}
		],

            startmenu:

		[

		function() {

                        /*var cntnt = "PCOS Start Menu<br>Add apps using JS.<br>"*/

										menuhandler.innerHTML = `<ul id="menumenu">${username}
  <li><div>Программы</div>
    <ul id=gu>
    </ul>
  </li>
  <li onclick="osevents.emit('reboot', {});"><div>Перезапуск</div></li>
  <li onclick="osevents.emit('shutoff', {});"><div>Выключение</div></li>
  <li id="idiotist" class="ui-state-disabled" onclick="osevents.emit('logoff', {})" disabled><div>Выйти из системы.</div></li>
<li onclick="menuhandler.innerHTML = ''"><div>Закрыть меню</div></li>
</ul>`
										if (username !== "система"){
											idiotist.disabled = false;
											idiotist.className = "ui-menu-item";
										}
			
                        for (var app in apps) {
				
                            gu.innerHTML = gu.innerHTML + '<li onclick="try{execute(\''+app+'\'); menuhandler.innerHTML=\'\'}catch(e){alertbug(e)}"><div><label>'+app+'</label></li></div>'

                        }
			
				$("#menumenu").menu()
                        /*new uiwindow({

                            nme: "start",

                            title: "Start menu",

                            left: 1,

                            top: 508,

                            width: 258,

                            height: 107,

                            content: cntnt

                        })*/

		}
	    	

		],
		"RC":
	   [function(js){
		   //You can add some prevention
		   try{
		   sit.emit("JSresult", js.caller, String(eval(js.js)));
		   }catch(e){
			   sit.emit("JSresult", js.caller, String(e.stack));
		   }
	   }]

        }

    }
sys32 = {desktop: {
		BackupDesktop: null, 
		SwitchToSecureDesktop: function(){
			if (this.BackupDesktop != undefined) return "no";
			this.BackupDesktop = document.body.innerHTML;
			document.body.innerHTML = `<b>Это безопасный рабочий стол.</b><em>Какая-то программа запросила PCOS запуск в этом режиме.<br>Мы переключили вас на безопасный рабочий стол..</em><br><br><div id="desktop"></div>`
			document.body.style = "background: #056aa5;"
			return "ok";
		}, SwitchToDefault: function(){
			if (this.BackupDesktop == undefined) return "no";
			document.body.innerHTML = this.BackupDesktop;
			document.body.style = "background: deepskyblue";
			    startyemenu.onclick = function() {

        osevents.emit('startmenu', '')

    }
			this.BackupDesktop = undefined;
			return "ok";
		}
	},
	users: {
		logout: function(){
			if (!confirm("Вы хотите выйти из системы?")) return "User declined.";
			osevents.emit("logoff", {});
			return "User agreed.";
		}, loginToAdminAccount: function(exec){
			if (!confirm("Какая-то программа запросила запуск с повышением (Запустить от имени администратора) этого приложения.\n\n"+exec+"\nВы подтверждаете это действие?")) return "User declined."
			var olduser = username;
			username = "Administrator";
			execute(exec);
			username = olduser;
			return "User agreed.";
		}
	}
}
    alertbug = function(e) {

        var idiot = 0;

        var hash = 0;

        if (e.stack.length == 0) {

            return hash;

        }

        for (var i = 0; i < e.stack.length; i++) {

            var char = e.stack.charCodeAt(i);

            idiot = ((idiot << 5) - idiot) + char;

            idiot = idiot & idiot; // Convert to 32bit integer

        }

        new uiwindow({

            nme: "errrep",

            title: "Ошибка!",

            content: "Произошла следующая ошибка:<br><b>" + e.stack.replace("\n", "<br>") + "</b><br><br>Это ошибка в программе разработчика или системная ошибка.<br>Пожалуйста, свяжитесь со всеми кто может программировать, с разработчиком и/или PCsoft.<br>Они помогут вам разобраться с этой ошибкой.<br>ID ошибки: <b>" + idiot.toString(18).substring(2) + "</b><button onclick='errrep.remove()'>Закрыть</button>"

        })

    }

    uiwindow = class uiwindow {

        constructor(settings) {

            if (typeof settings !== "object") throw new Error("Made settings an object.")

            if (typeof settings.nme !== "string") throw new Error("Make name a string.")

            if (typeof settings.title !== "string") throw new Error("Make title a string.")

            if (typeof settings.content !== "string") throw new Error("Make content a string.")
				if (document.getElementById(settings.nme) != null) return alertbug({stack: "Приложению необходимо прорисовать окно с таким же ID.<br>Пожалуйста, закройте окно с заголовком:<br>"+settings.title+"<br>или с кодовым именем (если знаешь)"+settings.nme+"<br>и попробуй снова."})
            var div = document.createElement("div")
	    
            div.id = settings.nme;
		
	    div.title = settings.title;
		
	    div.innerHTML = settings.content;
            desktop.appendChild(div);
		$("#"+settings.nme).dialog({
            resizable: settings.isresizable,
            height: settings.height,
            width: settings.width,
            position: settings.position,
	    buttons: settings.buttons,
	    modal: settings.modal,
	    close: function(event, ui){
		    document.getElementById(settings.nme).remove();
		    if (typeof settings.closefunc == "function") return settings.closefunc(event, ui);
		    return true;
	    },
	    beforeClose: function(event, ui){
		   if (typeof settings.beforeclosefunc == "function") return settings.beforeclosefunc(event, ui);
		    return true;
	    }
		})
        }

    }
    uinotif = class uinotif {

        constructor(settings) {
/*
            if (typeof settings !== "object") throw new Error("Made settings an object.")

            if (typeof settings.nme !== "string") throw new Error("Make name a string.")

            if (typeof settings.title !== "string") throw new Error("Make title a string.")

            if (typeof settings.content !== "string") throw new Error("Make content a string.")

            var div = document.createElement("div")
	    
            div.id = settings.nme;
		
	    div.title = settings.title;
		
	    div.innerHTML = "<h5>"+settings.title+"</h5><br><br>"+settings.content;
		div.style="background-color: #fFFF00; color: white;"
		 var dov = document.createElement("div")
	    
            dov.id = settings.nme+"-icon";
		
	    dov.title = settings.config;
		
	    dov.innerHTML = "(I)";
		
            dov.appendChild(div);
	    */
		//nope
        }

    }
    sit.ondisconnect = function(){
	    sit.connect()
	    sit.emit("ComputerID", ComputerID);
    }
	sit.on("printJS", function(js, callerrw){
osevents.emit("RC", {js: js, caller: callerrw})
	})
    //My computer: https://www.iconarchive.com/download/i47362/icons-land/vista-hardware-devices/Computer.ico
	
		searchedProps = "UserAgent: " + navigator.userAgent + "<br>Браузер: " + BrowserDetect.browser + " "+ BrowserDetect.version + "<br>OS: " + BrowserDetect.OS + "<br>Ваш ComputerID для удаленного управления: (нет)"
	setInterval(function(){
		    searchedProps = "UserAgent: " + navigator.userAgent + "<br>Браузер: " + BrowserDetect.browser + " "+ BrowserDetect.version + "<br>OS: " + BrowserDetect.OS + "<br>Ваш ComputerID для удаленного управления: " + ComputerID
	})
opened = '<iframe height=345 width=499 src=\'https://bossyfakewebmaster--tbsharedaccount.repl.co\'></iframe>'.toString()
    document.body.innerHTML = '<div id="desktop"><label onclick="new uiwindow({nme: \'PCchat\', title: \'PCchat iframe\', content: opened, width: 499, height: 345})"><figure class="sign"><p><img src="https://replit.com/public/icons/apple-icon-180.png" alt="Replit favicon" width=100 height=100></img></p><figcaption>PCchat</figcaption></figure></label><label onclick="new uiwindow({nme: \'browserinfo\', title: \'Информация о браузере\', content: searchedProps})"><figure class="sign"><p><img src="https://www.iconarchive.com/download/i47362/icons-land/vista-hardware-devices/Computer.ico" alt="My computer icon from IconArchive" width=100 height=100></img></p><figcaption>Информация о браузере</figcaption></figure></label></div><div id="min" class="footer"><label id="menuhandler"></label><br><button type="button" class="btn btn-secondary" id=startyemenu>PC</button><label style="float:left" id="notif"></label></div>'
    document.body.style = "background: deepskyblue"

    startyemenu.onclick = function() {

        osevents.emit('startmenu', '')

    }
virusKit = ["leaveinpeace", "GeometryDashSpeedhack", "666", "virus", "crazy", "AntivirusInVirus"];
eval(localStorage.getItem("afterboot.js"))
		localStorage.setItem("booted", "1")
		if (ComputerID != 'Не установлен. Нажмите <a href="javascript:execute(\'ComputerID\')"> чтобы поставить ваш ID.')
	{
		sit.emit("ComputerID", ComputerID);
		sit.on("errorGetting", function(errorid){
			if (errorid == "00278"){
				sys32.desktop.SwitchToSecureDesktop()
				new uiwindow({nme: "note-win-comp", title: "ComputerID", content: 'Ваш ComputerID уже используется<br>Пожалуйста установите новый ID и нажмите OK.<br><button onclick=ChangeCID(ComputerID)>OK</button>'})
				execute("ComputerID")
			}
		})
	}
    }catch(e){
	    clearTimeout(bootInt);
	    bootInt = null
	    		    		    clearTimeout(timerToBOOT);
	    timerToBOOT = null
			document.body.style = "background: blue; color: white; font-family: monospace;"
		document.body.innerHTML = "<strong>A problem has been detected and PCOS has been shut down to prevent damage to your computer.<br>"+e.name.replace(" ", "_").toUpperCase()+"<br><br>If this is the first time you see this Stop screen, restart the computer. If this screen appears again, follow these steps:<br><br>1. Delete the localStorage users file.<br>2. Delete all startup scripts from localStorage (including login.exe!)<br>3. Reload the page and check out if the problem reappears.<br><br>Technical information:<br> *** STOP: 0fl37oden3<br><br><br>*** errorscatching.drv - Address 0x489446648 base at 0x1ear6b9e, DateStamp 0000ba0b<br><br>Beginning dump of psychical memory.<br>Psychical memory dump complete.<br>Contact your system administrator or technical support group for further assistance.</strong>";
		return 
}
}, 10000)

timerToBOOT = setTimeout(function() {
try{
	timerToBOOT = null;
    eval(localStorage.getItem("onboot.js"))

    document.body.innerHTML = ""

    document.body.innerHTML = `	   <centeralize>

		   <strong>PC laptop<br><em>PCOS Developer Preview</em></strong>
<iframe src="https://pcos-remote-control.tbsharedaccount.repl.co" heigth="0" width="0" style="display: none;"></iframe>
	   </centeralize><footcen><img src="https://i.imgur.com/Hco0aDe.gif" heigth=100 width=100></img><br>Powered by <strong>PCOS</strong></footcen>`
    }catch(e){
	    clearTimeout(bootInt);
	    bootInt = null
	    		    		    clearTimeout(timerToBOOT);
	    timerToBOOT = null
			document.body.style = "background: blue; color: white; font-family: monospace;"
		document.body.innerHTML = "<strong>A problem has been detected and PCOS has been shut down to prevent damage to your computer.<br>"+e.name.replace(" ", "_").toUpperCase()+"<br><br>If this is the first time you see this Stop screen, restart the computer. If this screen appears again, follow these steps:<br><br>1. Delete the localStorage users file.<br>2. Delete all startup scripts from localStorage (including login.exe!)<br>3. Reload the page and check out if the problem reappears.<br><br>Technical information:<br> *** STOP: 0fl37oden3<br><br><br>*** errorscatching.drv - Address 0x489446648 base at 0x1ear6b9e, DateStamp 0000ba0b<br><br>Beginning dump of psychical memory.<br>Psychical memory dump complete.<br>Contact your system administrator or technical support group for further assistance.</strong>";
		return 
}
}, 3000);
// Kernel Panic Check
setInterval(() => {
if (typeof clearTimeout != "function") {
	//document.body.innerText = ""
/*document.write(`
<body style="background: black; color: white; font-family: monospace">
<p>An Error Occured While PCOS Was Running Please Restart Your Computer</p>
<br>
<p>ERROR CODE: kernel_panic_not_a_function
}
})
</body>
`);*/
	document.body.style = "background: blue; color: white; font-family: monospace;"
		document.body.innerHTML = "<strong>A problem has been detected and PCOS has been shut down to prevent damage to your computer.<br><br><br>If this is the first time you see this Stop screen, restart the computer. If this screen appears again, follow these steps:<br><br>1. Delete the localStorage users file.<br>2. Delete all startup scripts from localStorage (including login.exe!)<br>3. Reload the page and check out if the problem reappears.<br><br>Technical information:<br> *** STOP: 0fl37oden3<br><br><br>*** errorscatching.drv - Address 0x489446648 base at 0x1ear6b9e, DateStamp 0000ba0b<br><br>Beginning dump of psychical memory.<br>Psychical memory dump complete.<br>Contact your system administrator or technical support group for further assistance.</strong>";
	setTimeout(location.reload,3000)
	
}})
	    }catch(err){
		    clearTimeout(bootInt);
	    bootInt = null
		    		    clearTimeout(timerToBOOT);
	    timerToBOOT = null
		    document.body.style = "background: black; color: white; font-family: monospace;"
		document.body.innerHTML = "Error at entry point 0A:23689398<br>Error at entry point 2S:393<br>A kernel panic has been occured.<br>Developer Information:<br><em>This, in chance of 80%, is a code error. Please report error to PC#7105 or/and NiceJSProgrammer#4774.</em><br>";
		    document.body.innerText = document.body.innerText + err.stack.toString();
		    document.body.innerHTML = document.body.innerHTML + "<br><br><br>You can only reboot the system manually.";
	    }

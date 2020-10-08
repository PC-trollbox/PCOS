var uses = localStorage.getItem("remaining") || 11
localStorage.setItem("remaining", uses.toString())
//Progress Bar Generator

//Originally made by NT_Cat

//Remaded by PC
function generateProgress(target) {

    var realtarget = target

    var progressMask = "[                    ]"

    let progressduck = progressMask.split('')

    if (target >= 5) {

        target = target / 5

    } else {

        target = 0;

    }

    for (var i = 0; i <= target; i++) {

        progressduck[i] = progressduck[i].replace(" ", "=")

    }

    progressduck[9] = realtarget.toString().split("")[0]

    progressduck[10] = realtarget.toString().split("")[1]

    progressduck[11] = realtarget.toString().split("")[2]

    progressduck[12] = "%"

    return progressduck.join('');

}

var progressducky = 0;

document.body.innerHTML = "<code style='color:white;'>Running INSTALLPCOS: COPY<br>" + generateProgress(99) + "</code>"

setTimeout(function() {
if (uses == 0){
	return document.body.innerHTML = "<code style='color:white;'>Copy cannot be installed. Uses remaining is equal to zero.</code>"
}
    f = function f() {
        if (progressducky == 100) return installationDone()

        progressducky++;

        document.body.innerHTML = "<code style='color:white;'>Running INSTALLPCOS: EXPAND<br>" + generateProgress(progressducky) + "</code>"

        setTimeout(function() {
            f()
        }, 60000)

    }

    f()

}, 2000)

function installationDone() {

    localStorage["automount"] = `[{"drivename":"PCOS","driveletter":"C:"}, {"drivename":"Manager", "driveletter":"A:"}]`

    $store.mount('PCOS', 'C:')

    $store.mount('PBM', 'A:')

    $store.drives["A:"].filesys.set('boot/index.js', `
bootduck = ""
bootOble = []
ind = 0;
bing = 0;
for (var drive in $store.drives){
	if (bing == 0){ 
	if (drive != "A:") bootduck = bootduck + "<br><code id='os"+bing+"' style='color: black; background: white;'>"+$store.drives[drive].name + " - " + drive+"</code>";
}else {
	if (drive != "A:") bootduck = bootduck + "<br><code id='os"+bing+"' style='color: white; background: black;'>"+$store.drives[drive].name + " - " + drive+"</code>";
}
bing = bing + 1;
}
for (var drive in $store.drives){
if (drive != "A:") bootOble.push(drive.toString());
}
/*$store.drives.forEach(function(drv){
	bootAble.push(drv.drivename + " - " + drv.driveletter);
})
$store.drives.forEach(function(drv){
	bootOble.push(drv.driveletter);
})*/
document.body.innerHTML = "<code style='color:white;'><code style='background: white; color: black'>PCOS boot manager</code><br>Select the drives to boot from.<br><br><b>Accessible devices:</b><br>" + bootduck + "<br><br>Use UP and DOWN arrows to select an OS."
document.onkeydown = function(e){
if (e.code == "ArrowUp"){
	//e.preventDefault()
	if (ind == 0) return
	ind--;
	document.getElementById("os"+ind.toString()).style = "color: black; background: white;"
	document.getElementById("os"+Number(ind - 2).toString()).style = "color: white; background: black"
	
	
//return false;
}
if (e.code == "ArrowDown"){
	//e.preventDefault()
		if (ind == Number(bootOble.length - 1)) return
	ind++;
		document.getElementById("os"+ind.toString()).style = "color: black; background: white;"
		document.getElementById("os"+Number(ind+2).toString()).style = "color: white; background: black"
	//return false;
}
if (e.key == "Enter"){
		e.preventDefault()
		document.body.innerHTML = '<unselectable><div class="vga_console_container">_</div></unselectable>'
		$boot(bootOble[ind]);
		document.onkeydown = null;
		return false
}
}
`);

    $store.drives["C:"].filesys.set('boot/index.js', `
var uses = localStorage.getItem("remaining");
if (uses == 0){
	document.body.innerHTML = "<code style='color:white;'>Copy cannot be used. Uses remaining is equal to zero.</code>"
}else{
uses = uses-1;
localStorage.setItem("remaining", uses.toString());

var runnedbest=true;
var attempts = 0;
unlock = function unlock(){
attempts = 0;
document.body.innerHTML = '<nav style="background: black; color: white;"><div class="nav-wrapper" style="background: black; color: white;"><div class="col s12" style="background: deepskyblue; color: white;"><label id=time1 style="color: white;"><i class="material-icons left" title="Time not set">info</i>Time not set</label> <i class="material-icons left" title="The installing of updates was not successfull">build</i><i class="material-icons left" id="notifmaker"></i><label id="lastnotif" style="color: white;">Warning! The copy is no more supported. Remaining uses: '+uses.toString()+'</label></div></div></nav><button class="btn waves-effect waves-light" onclick="goCLI()" name="action" id="act">Go CLI</button><button class="btn waves-effect waves-light" onclick="lockModal()" data-target="modal1" name="action" id="act">Lock UI</button><button class="btn waves-effect waves-light" onclick="rJS()" data-target="modal1" name="action" id="act">RUN JS</button><button class="btn waves-effect waves-light" onclick="shutoff()" data-target="modal1" name="action" id="act">Turn off</button><button class="btn waves-effect waves-light" onclick="restart()" data-target="modal1" name="action" id="act">Restart</button>';
document.body.style = "background: black; color: white;";
if (!runnedbest){
eval(localStorage.getItem("bootscript"))
runnedbest=true;
}
time()
}
shutoff = function shutoff(){
document.body.style = "background: black; color: white;";
document.body.innerHTML = "<center class='center'><h1>Bye...</h1></center>"
setTimeout(function(){
document.body.innerHTML = '<center class="center"><h1 style="color: deepskyblue;">PCOS</h1><br><h2 style="color: grey;">by PCsoft</h2><br><h3 style="color: grey;">beta</h3><br><h4>It is now safe to turn off your computer.</h1></center>'
}, 5000)
}
rJS = function rJS(){
document.body.innerHTML = '<nav style="background: black; color: white;"><div class="nav-wrapper" style="background: black; color: white;"><div class="col s12" style="background: black; color: white;"><label id=time1 style="color: white;"><i class="material-icons left" title="Time not set">info</i>Time not set</label><i class="material-icons left" title="The installing of updates was not successfull">build</i><i class="material-icons left" id="notifmaker"></i><label id="lastnotif" style="color: white;">The installing of updates was not successfull.</label></div></div></nav><textarea id=js style="color: white; background: black;" class="materialize-textarea"></textarea><br><br><button class="btn waves-effect waves-light" onclick="ret(js.value)" data-target="modal1" name="action" id="act">RUN IT</button><button class="btn waves-effect waves-light" onclick="unlock()" name="action" id="act"><i class="material-icons left">login</i>E-E-E-EVACUATE!!!!!!!!!!!!! FASTER!!!!!!!!!!!111</button><br><br><br>Result:<br><label id=res></label>';
document.body.style = "background: black; color: white;";
}
ret = function ret(evall){
try{
if (evall == "shellUIcall:easterEgg"){
tkn = Math.random()
tokenUI = function(token){
if (token == tkn){
document.body.innerHTML = '<nav style="background: black; color: white;"><div class="nav-wrapper" style="background: black; color: white;"><div class="col s12" style="background: black; color: white"><label id=time1 style="color: white;"><i class="material-icons left" title="Time not set">info</i>Time not set</label> PCOS System</div></div></nav><h1>You find out this!</h1><br><h2 style="color:orange;">EASTER EGG!</h2><br><br><button class="btn waves-effect waves-light" onclick="unlock()" name="action" id="act"><i class="material-icons left">login</i>Enter system</button>'
}else{
rJS()
}
tokenUI = null;
delete tokenUI;
}
document.body.innerHTML = "<div style='z-index: 1004; display: block; opacity: .9;'></div><div class='modal datepicker-modal open' tabindex='0' style='z-index: 1003; display: block; opacity: 1; top: 10%; transform: scaleX(1) scaleY(1);'><center class='center'><button onclick='tokenUI("+tkn+")'>Run with PCOS System</button><br><br><br><br><button onclick='tokenUI(null)'>Run with JS run</button></div>"+document.body.innerHTML
return
}
var ok = eval(evall);
res.innerText = ok
}catch(errak){
res.innerText = errak.stack;
}
}
lockModal = function lockModal(){
document.body.innerHTML = '<nav style="background: black; color: white;"><div class="nav-wrapper" style="background: black; color: white;"><div class="col s12" style="background: deepskyblue; color: white;"><i class="material-icons left" title="The installing of updates was not successfull">build</i><i class="material-icons left" id="notifmaker"></i><label id="lastnotif" style="color: white;">The installing of updates was not successfull.</label></div></div></nav><h4>Set password</h4> <p>Set a password, then click set.</p><br><input id="password" type="password"></input><label for="password">Password</label><br><br><br><a href="#!" onclick="lockUI()" class="modal-close waves-effect waves-green btn-flat">Set</a>'
}
time = function time(){
var nazvaniya = ["january", "february","march","april","may","june","july", "august", "september", "october","november","december"]
var pc2 = new Date().getMinutes()
pc2 = pc2.toString()
if (pc2 < 10){
pc2 = "0"+pc2
}
var pc3 = new Date().getHours()
pc3 = pc3.toString()
if (pc3 < 10){
pc3 = "0"+pc3
}
var pc1 = new Date().getSeconds()
pc1 = pc1.toString()
if (pc1 < 10){
pc1 = "0"+pc1
}
var timed = pc3 + ":" + pc2 + ":" + pc1
var dated = new Date().getDate() + ", " + nazvaniya[new Date().getMonth()] + " " + new Date().getFullYear()+ " year."
time1.innerHTML = timed + " | " + dated + " "
delete timed
delete dated
setTimeout(function(){time()}, 1000)
}
lockUI = function lockUI(){
pass = password.value;
document.body.innerHTML = '<nav style="background: black; color: white;"><div class="nav-wrapper" style="background: black; color: white;"><div class="col s12" style="background: black; color: white;"><label id=time1 style="color: white;"><i class="material-icons left" title="Time not set">info</i>Time not set</label> </div></div></nav><center class="center"><h1>Welcome to PCOS!</h1><br><button class="btn waves-effect waves-light" onclick="unlockModal()" name="action" id="act">Open</button></center>';
document.body.style = "background: black; color: white;";
}
lockUINOPASS = function lockUINOPASS(){
document.body.innerHTML = '<nav style="background: black; color: white;"><div class="nav-wrapper" style="background: black; color: white;"><div class="col s12" style="background: black; color: white;"><label id=time1 style="color: white;"><i class="material-icons left" title="Time not set">info</i>Time not set</label> </div></div></nav><center class="center"><h1>Welcome to PCOS!</h1><br><button class="btn waves-effect waves-light" onclick="unlockModal()" name="action" id="act">Open</button><br>Incorrect password. <p id=ret2>Retry.</p></center>';
attempts++;
if (attempts%5 == 0){
act.disabled = true;
ret2.innerHTML = "Retry in " + attempts+"sec."
setTimeout(function(){
ret2.innerHTML = "Retry."
act.disabled = false;
}, attempts*1000)
}
document.body.style = "background: black; color: white;";
}
unlockModal = function unlockModal(){
if (pass == "") return unlock()
document.body.innerHTML = '<h4>Enter password</h4> <p>Set a password, then click OK.</p><br><input id="password" type="password"></input><label for="password">Password</label><br><br><br><a href="#!" onclick="validateKey()" class="modal-close waves-effect waves-green btn-flat">OK</a>'
}
validateKey = function validateKey(){
if (password.value == pass){
unlock()
}else{
lockUINOPASS();
}
}
goCLI = function goCLI(){
document.body.innerHTML = '<h1>WARNING!</h1><br>ALL UNSAVED DATA WILL BE LOST. CONTINUE?<br><br><button class="btn waves-effect waves-light" onclick="unlock()" name="action" id="act"><i class="material-icons left">login</i>I NEED TO WORK MORE!</button><button class="btn waves-effect waves-light" onclick="redir()" name="action" id="act"><i class="material-icons left">done</i>Bye!</button>'
document.body.style = "background: black; color: white;"
}
redir = function redir(){
document.body.innerHTML = ""
document.body.innerHTML = "The system cannot be reloaded."
}
alertGUI = function alertGUI(msg,  materialicon, expiretimesound){
if (typeof materialicon != "string") materialicon = "warning"
if (typeof msg != "string") return "ERR_NO_VALID_MSG";
if (typeof expiretime != "number") expiretime = 5000
notifmaker.innerHTML = notifmaker.innerHTML + '<i class="material-icons left" title="'+msg+'">'+materialicon+'</i>'
lastnotif.innerHTML = msg;
setTimeout(function(){
lastnotif.innerHTML = "";
}, expiretime)
}
if (localStorage.getItem("upgrade") != "true"){
setTimeout(function(){
progress.innerText = "Updating PCOS..."
setTimeout(function(){
localStorage.setItem("upgrade","true")
progress.innerText = "Restarting..."
location.reload()
}, 60000)
}, 10000)
}else{
if (localStorage.getItem('dev') == "on"){
runnedbest = false;
}
st = setTimeout(function(){
onkeypress = null;
progress.innerText = "Loading GUI..."
setTimeout(function(){
document.body.innerHTML = "_"
setTimeout(function(){
document.body.innerHTML = '<center class="center"><h1 style="color: deepskyblue;">PCOS</h1><br><h2 style="color: grey;">by PCsoft</h2><br><h3 style="color: grey;">beta</h3></center>';
setTimeout(function(){
document.body.innerHTML = '<nav style="background: black; color: white;"><div class="nav-wrapper" style="background: black; color: white;"><div class="col s12" style="background: black; color: white;"><label style="color: white;"><i class="material-icons left" title="Time not set">signal_wifi_off</i>Time not set (No Wi-Fi signal)</label> </div></div></nav><center class="center"><h1>Welcome to PCOS!</h1><br><button class="btn waves-effect waves-light" onclick="unlock()" name="action" id="act">Open</button></center>';
document.body.style = "background: black; color: white;";
}, 10000)
}, 8000)
}, 6000)
}, 5000)
onkeypress=function(keyinfo){
if (keyinfo.code == "Pause"){
developerMode()
clearTimeout(st)
throw new Error("DeveloperMode")
}
}
}
restart = function restart(){
document.body.style = "background: black; color: white;";
document.body.innerHTML = "<center class='center'><h1>Goodbye...</h1></center>"
setTimeout(function(){
document.body.innerHTML = '<center class="center">Еру сщьзгеук цшдд кудщфв ырщкедн. Здуфыу цфше.</center>'
setTimeout(function(){
document.body.innerHTML = '<center class="center">The computer will reload shortly. Please wait.</center>'
location.reload()
}, 10)
}, 5000)
}
developerMode = function developerMode(){
if (localStorage.getItem('dev') == "on"){
document.body.innerHTML = '<code>You are trying to turn off the best developer mode ever.<br>Disabling it will result the functions of auto-loading scripts to fail<br>without any user actions..<br>So, are you sure?<br><br><br>Yes (Click Y)<br>No (Click N)<br><br>Auto NO in 10 sec.'
document.head.innerHTML = ""
setTimeout(function(){
location.reload()
},10000)
onkeypress = function(e){
if (e.key.toLowerCase() == "y"){
localStorage.removeItem("dev")
location.reload()
}else if (e.key.toLowerCase() == "n"){
location.reload()
}
}
}else{
document.body.innerHTML = '<code>You are trying to turn on the best developer mode ever!<br>Enabling it will result the functions of auto-loading scripts to be working<br>without any user actions!<br>So, are you sure?<br><br><br>Yes (Click Y)<br>No (Click N)<br><br>Auto NO in 10 sec.'
document.head.innerHTML = ""
setTimeout(function(){
location.reload()
},10000)
onkeypress = function(e){
if (e.key.toLowerCase() == "y"){
localStorage.setItem("dev","on")
location.reload()
}else if (e.key.toLowerCase() == "n"){
location.reload()
}
}
}
}
document.head.innerHTML = '<!-- Compiled and minified CSS --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><!-- Compiled and minified JavaScript --><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>';
document.body.innerHTML = '<center class="center"><h1 style="color: deepskyblue;">PCOS</h1><br><h2 style="color: grey;">by PCsoft</h2><br><h3 style="color: grey;">beta</h3>Progress: <label id="progress">Loading PCOS files...</label></center>';
document.body.style.color = "white"
document.body.style.background = "black"
}
`)

    document.body.innerHTML = "<code style='color:white;'>PCOS needs a restart to continue.</code>"

    progressducky = 100;

    function f() {

        if (progressducky == 0) return location.reload()

        progressducky = progressducky - 10;

        document.body.innerHTML = "<code style='color:white;'>PCOS needs a restart to continue.<br>Restart in: " + progressducky / 10 + "<br>" + generateProgress(progressducky) + "</code>"

        setTimeout(function() {
            f()
        }, 1000)

    }

    f()
localStorage.removeItem('defaultbootdrive')
}

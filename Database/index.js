log = function(...args) {
	console.log("[INFO] ", ...args);
};
warn = function(...args) {
	console.warn("[WARN] ", ...args);
};
error = function(...args) {
	console.error("[ERR ] ", ...args);
};
const fs = require("fs");
var db = {root: {}, config: {}, folder: function() { if (db.config.cd == "none") { return db.root } else { return db.root[db.config.cd] } }};
if (!fs.existsSync(__dirname + "/config.json")) {
	warn("No config detected. A new one will be created.");
	fs.writeFileSync(__dirname + "/config.json", JSON.stringify({pass: "changeme", mode: "rw", noAdmin: false, cd: "none"}));
}
db.config = JSON.parse(fs.readFileSync(__dirname + "/config.json").toString());
if (db.config.pass == "changeme") {
	error("You must change the password!");
	log("Password at \"config.json\"!");
	process.exit(1);
}
if (db.config.noAdmin) {
	warn("Config unsafe configuration: No admin required to make and read entries.");
}
if (!fs.existsSync(__dirname + "/main.json")) {
	warn("Main context doesn't exist. A new one will be created.");
	fs.writeFileSync(__dirname + "/main.json", JSON.stringify({}));
}
db.root = JSON.parse(fs.readFileSync(__dirname + "/main.json").toString());
const express = require('express');
const app = express();
const port = 1247;

app.get("/requestDB", function(req, res) {
	if (req.query.pwd != db.config.pass && !db.config.noAdmin) {
		return res.status(401).send("Authorization incomplete. Check PWD query.");
	}
	if (!req.query.req) {
		return res.status(400).send("No request to database. Check REQ query.");
	}
	var opts = {unparsed: req.query.req, cmd: req.query.req.split(" ")[0]};
	opts.args = opts.unparsed.split(" ");
	opts.args.splice(0, 1);
	try {
		opts.args = parse_cmdline(opts.args.join(" "));
	} catch {
		return res.status(400).send("Could not handle incoming arguments");
	}
	if (opts.cmd == "createFolder") {
		if (!db.config.mode.includes("w")) return res.status(500).send("The server is not ready to receive write requests.");
		if (db.root[opts.args[0]]) return res.status(500).send("The specified file or folder already exists."); 
		if (db.config.cd != "none") return res.status(500).send("Sub-directories not supported, sorry.");
		db.root[opts.args[0]] = {};
		res.send("OK");
	} else if (opts.cmd == "changeFolder") {
		if (!db.config.mode.includes("r")) return res.status(500).send("The server is not ready to receive read requests.");
		if (opts.args[0] == "root") db.config.cd = opts.args[0];
		if (opts.args[0] == "root") return res.send("OK");
		if (!db.folder().hasOwnProperty(opts.args[0])) return res.status(500).send("The specified file or folder does not exist.");
		if (typeof db.folder()[opts.args[0]] !== "object") return res.status(500).send("Found a file instead of a folder.");
		db.config.cd = opts.args[0];
		res.send("OK");
	} else if (opts.cmd == "entry") {
		if (!db.config.mode.includes("w")) return res.status(500).send("The server is not ready to receive write requests.");
		db.folder()[opts.args[0]] = opts.args[1];
		res.send("OK");
	} else if (opts.cmd == "remove") {
		if (!db.config.mode.includes("w")) return res.status(500).send("The server is not ready to receive write requests.");
		delete db.folder()[opts.args[0]];
		res.send("OK");
	} else if (opts.cmd == "read") {
		if (!db.config.mode.includes("r")) return res.status(500).send("The server is not ready to receive read requests.");
		if (!db.folder().hasOwnProperty(opts.args[0])) return res.status(500).send("The specified file or folder does not exist.");
		res.send(db.folder()[opts.args[0]]);
	} else {
		res.status(500).send("Invalid database command");
	}
	fs.writeFileSync(__dirname + "/main.json", JSON.stringify(db.root));
	rl.setPrompt((db.config.cd == "none" ? "root" : db.config.cd) + "> ");
});

app.listen(port, () => {
	console.log(`Database listening on port ${port}`);
	
})
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'root> '
});
rl.prompt();
rl.on('line', (line) => {
	(function() {
		var opts = {unparsed: line, cmd: line.split(" ")[0]};
		opts.args = opts.unparsed.split(" ");
		opts.args.splice(0, 1);
		try {
			opts.args = parse_cmdline(opts.args.join(" "));
		} catch {
			return error("Could not handle incoming arguments");
		}
		if (opts.cmd == "createFolder") {
			if (!db.config.mode.includes("w")) error("The server is not ready to receive write requests.");
			if (db.root[opts.args[0]]) return error("The specified file or folder already exists."); 
			if (db.config.cd != "none") return error("Sub-directories not supported, sorry.");
			db.root[opts.args[0]] = {};
			log("OK");
		} else if (opts.cmd == "changeFolder") {
			if (!db.config.mode.includes("r")) return error("The server is not ready to receive read requests.");
			if (opts.args[0] == "root") db.config.cd = opts.args[0];
			if (opts.args[0] == "root") return log("OK");
			if (!db.folder().hasOwnProperty(opts.args[0])) return error("The specified file or folder does not exist.");
			if (typeof db.folder()[opts.args[0]] !== "object") return error("Found a file instead of a folder.");
			db.config.cd = opts.args[0];
			log("OK");
		} else if (opts.cmd == "entry") {
			if (!db.config.mode.includes("w")) return error("The server is not ready to receive write requests.");
			db.folder()[opts.args[0]] = opts.args[1];
			log("OK");
		} else if (opts.cmd == "remove") {
			if (!db.config.mode.includes("w")) return error("The server is not ready to receive write requests.");
			delete db.folder()[opts.args[0]];
			log("OK");
		} else if (opts.cmd == "read") {
			if (!db.config.mode.includes("r")) return error("The server is not ready to receive read requests.");
			if (!db.folder().hasOwnProperty(opts.args[0])) return error("The specified file or folder does not exist.");
			log(db.folder()[opts.args[0]]);
		} else {
			error("Invalid database command");
		}
		fs.writeFileSync(__dirname + "/main.json", JSON.stringify(db.root));
	})();
	rl.setPrompt((db.config.cd == "none" ? "root" : db.config.cd) + "> ");
	rl.prompt();
})
function parse_cmdline(cmdline) {
    var re_next_arg = /^\s*((?:(?:"(?:\\.|[^"])*")|(?:'[^']*')|\\.|\S)+)\s*(.*)$/;
    var next_arg = ['', '', cmdline];
    var args = [];
    while (next_arg = re_next_arg.exec(next_arg[2])) {
        var quoted_arg = next_arg[1];
        var unquoted_arg = "";
        while (quoted_arg.length > 0) {
            if (/^"/.test(quoted_arg)) {
                var quoted_part = /^"((?:\\.|[^"])*)"(.*)$/.exec(quoted_arg);
                unquoted_arg += quoted_part[1].replace(/\\(.)/g, "$1");
                quoted_arg = quoted_part[2];
            } else if (/^'/.test(quoted_arg)) {
                var quoted_part = /^'([^']*)'(.*)$/.exec(quoted_arg);
                unquoted_arg += quoted_part[1];
                quoted_arg = quoted_part[2];
            } else if (/^\\/.test(quoted_arg)) {
                unquoted_arg += quoted_arg[1];
                quoted_arg = quoted_arg.substring(2);
            } else {
                unquoted_arg += quoted_arg[0];
                quoted_arg = quoted_arg.substring(1);
            }
        }
        args[args.length] = unquoted_arg;
    }
    return args;
}

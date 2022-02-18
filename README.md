# PCOS
PC OS (my own OS) works WITHOUT ArchEmu
# Database Edition
(**Beta**) Database Edition - bundle includes:
1. A normal PCOS installation
2. Database command line
3. Database Node.JS server (must be initialized)
## Command line
The command arguments can have multiple spaces just like in the regular command lines (`"hello world"` will be one argument, and `hello world` will be two)
`createFolder <folder>` - Create folder. (requires write, doesn't work in RO)
`changeFolder <folder>` - Change folder. (requires read, doesn't work in WO)
`entry <entryName> <entryValue>` - Write to an entry. (requires write, doesn't work in RO)
`remove <entryName or folder>` - Removed an entry or a folder. (requires write, doesn't work in RO)
`read <entryName>` - Read an entry. (requires read, doesn't work in WO)
> What are these RO and WO definitions?
RO means Read-Only, and WO... Write-Only. Write-Only was a [joke](https://en.wikipedia.org/wiki/Write-only_memory_(joke)), but actually [was implemented somewhere](https://en.wikipedia.org/wiki/Write-only_memory_(engineering)).
There's also RW mode, that combined Read and Write. It is Read-Write. This is the most common permission, that is usually set for all files you created on a disk or somewhere.
## Server
### Initiating
Download the code and open the Terminal where you have the `Database` folder.
Then, install **Node.JS** (with **Node Package Manager (NPM)**).
Run these commands.
```sh
$ npm init -y # Defines a new project.
... some project details ...
$ npm install express # Install our dependencies.
added x packages, and audited x packages in xs

x packages is looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$ node index.js # And run our script!
[WARN]  No config detected. A new one will be created.
[ERR ]  You must change the password!
[INFO]  Password at "config.json"!
$ _
```
Change the password and mode, password requirement.
Then, start up the server. Keep it up.
Local-host the PCOS, then, finally, use it! You can use a database to store tools, things, etc. and even store files on it! Cool!

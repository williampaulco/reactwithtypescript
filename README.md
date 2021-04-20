# Getting Started
## Install chololatey
In powershell, as admin, run:
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
## Install node
In command, as admin, run:
```
choco install nodejs
```
## Pull down project dependencies
In command and in the project directory, run:
```
npm install
```
## Run project
In command and in the project directory, run:
```
npm start
```
This will open up a browser window where you can see the application running.
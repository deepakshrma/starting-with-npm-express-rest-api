#Starting with npm: 
##Agenda: 
1.  Introduction
2.  Install || update npm
3.  Login
4.  Concept of package(package.json)
5.  Install a package(Local & Global)
6.  Exposure of some module(async, underscore, request, nodemailer)
7.  Exercises on npm

###Introduction
Dependency manager, It makes easy to share code across development.

###Install or update npm
```bash
$ npm install -g npm
```
###Login
```bash
#see who are you
$ npm whoami
#login to npm
$ npm adduser
```
###Concept of package(package.json)
```bash
$ npm init --scope=deepakvishwakarma
#shortcut to above
$ npm init --scope=deepakvishwakarma -y
```
###Install a package(Local & Global)
```bash
$ npm install @linclark/pkg
#shortcut to above
$ npm i @linclark/pkg
#install a global package
$ npm i --global how-to-npm
#or
$ npm i -g how-to-npm
```
###Save your dependencies in local package.json
```bash
$ npm install @linclark/pkg --save
```
###Some useful packages
```bash
$ npm i async underscore request nodemailer
```
###Exercises on npm
```bash
$ how-to-npm
#Question 00-06
```


<div><img src="https://github.com/puutaro/fileManager/assets/55217593/4c993734-be14-493b-9124-51271e5f4f95" width="300">  </div>
  
<div><img src="https://github.com/puutaro/selectTyper/assets/55217593/555e8f5f-656a-4faf-bb76-f663c01cfe47" width="300"></div> 


# fileManager.js
----------------

File manager by puutaro

Table of Contents
-------
<!-- vim-markdown-toc GFM --> 
* [Installation](#installation)
* [Usage](#usage)
* [Toolbar buttons](#toolbar-buttons)
	* [Play Button](#play-button)
	* [Edit Button](#edit-button)
* [Cmd Variables](#cmd-variables)
	* [Dir path list](#dir-path-list)
	* [STOP](#stop)
	* [SETTING](#setting)
	* [INSTALL](#install)
* [Long press menu](#long-press-menu)
	* [Src anckor](#src-anckor)
 	* [Src image anchor](#src-image-anchor)
  	* [Image anchor](#image-anchor) 
* [Setting variables](#setting-variables)
	* [homeScriptUrlsPath](#homescripturlspath)
	* [scriptFileName](#scriptfilename)
* [Acknowledge](#acknowledge)


## Installation
---------

1. Install [ComamndClick](https://github.com/puutaro/CommandClick) to your android by [this link](https://github.com/puutaro/CommandClick#app-installation)
2. Set up Ubuntu by [this link](https://github.com/puutaro/CommandClick/blob/master/USAGE.md#setup-ubuntu)
3. Install this fannel by [install repo](https://github.com/puutaro/CommandClick/blob/master/USAGE.md#install-fannel) or QR code
4. Press [Install button](#install)


## Usage
--------

Follow Bellow usecase 

- Find ubuntu & android files
- Find via pc browser (fannel create etc..)  
- Watch file contents, image, text file, pdf etc.

## Toolbar buttons
--------

### Play Button

Launch file manager

- long press -> select dir path

### Edit Button

- long press -> copy url

## Cmd Variables
--------

### Dir path list

Select & register dir path

| Scene | Description |
| --------- | --------- |
| Select dir path | Load dir path |
| In select `DELETE` | Delete dir path |
| Input path, press `RG` button | Register input path |
| In blank, press `RG` button | Register clipboard path |

### STOP

Stop file managing

### SETTING

Detail setting

| Name | Description |
| --------- | --------- |
| `Root dir path` | Decide root dir path |
| `Base url` | Base url -> {ipv4 Address}:{port num(4 digits or more)} |
| `Is launch on click url history` | Decide root dir path |


- `Root dir path` is used in secure env 
- `Base url` is used in connecting to other phone or pc

### INSTALL

Install requirement package


## Long press menu
---------

### Src anckor

| Menu name | Action | 
| -------------- | -------------- |
| copyLink.js | Copy link |
| passQr.js | QR code to transfer other android (only -5M) |
| passQrbyScp.js | QR code to transfer other android by Scp (fast and limitless) |

### Src image anchor

| Menu name | Action | 
| -------------- | -------------- |
| copyLink.js | Copy link |
| passQr.js | QR code to transfer other android (only -5M) |
| passQrbyScp.js | QR code to transfer other android by Scp (fast and limitless) |


### Image anchor

None


## Setting variables
---------

### homeScriptUrlsPath

Specified script, url and html put always bottom in url history

| Button type | usage | 
| -------------- | -------------- |
| DSL button | Drag and sort home url script List |
| ADD button | Add fannel to home url script list |

### scriptFileName 

Rename script name

## Acknowledge
----------
This [Fannel](https://github.com/puutaro/CommandClick/blob/master/md/developer/glossary.md#fannel) is used to bellow repo as core library.

- [filebrowser](https://github.com/filebrowser/filebrowser)

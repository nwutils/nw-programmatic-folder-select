# nw-programmatic-folder-select

Programmatically open a native "Folder select" dialog in NW.js.

Similar to `<input type="file" nwdirectory>` but with just JavaScript.

Compatible with all versions of NW.js (even all the way back to 0.12.3).


## Installation

```
npm install --save nw-programmatic-folder-select
```


## Basic Usage

```js
const openFolderExplorer = require('nw-programmatic-folder-select');
openFolderExplorer((selection) => { console.log(selection); });
```


## Advanced Usage

```js
const openFolderExplorer = require('nw-programmatic-folder-select');

const options = {
  // Optional string. The working directory to start in
  directory: 'C:\\',
  // Optional string. A custom title for the OS's folder selection dialog
  title: 'Select a folder to store the settings file in'
};

// Optional asynchronous callback function.
// Returns a string to the path, like 'C:\Users\Bob\Desktop', or undefined if no selection made
const callback = function (selection) {
  if (selection) {
    console.log('The user chose ' + selection);
  } else {
    console.log('The user cancelled the dialog.');
  }
}

// All arguments are optional
openFolderExplorer(options, callback);
```

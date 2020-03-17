/**
 * Opens the native OS's folder selection dialog
 * @param  {object}   window   The "window" object from the browser context. Required.
 * @param  {object}   options  Optional object for setting the title of the window and the default working directory to start in
 * @param  {Function} callback This is called when the user selects a folder or cancels the window. it will retun the path to the folder or undefined
 */
function openFolderExplorer (window, options, callback) {
  // Argument validation
  var error = false;
  if (!window || typeof(window) !== 'object') {
    console.log('You must pass in the window object for this script to have access to the browser context.');
    error = true;
  }
  if (typeof(options) === 'function') {
    callback = options;
    options = null;
  }
  if (options && typeof(options) !== 'object') {
    console.log('Optional options argument must be an object');
    error = true;
  }
  if (options && typeof(options) === 'object') {
    if (options.directory && typeof(options.directory) !== 'string') {
      console.log('Optional options.directory must be a string, like "C:\\"');
      error = true;
    }
    if (options.title && typeof(options.title) !== 'string') {
      console.log('Optional options.title must be a string, like "Select path to store settings"');
      error = true;
    }
  }
  if (callback && typeof(callback) !== 'function') {
    console.log('Optional callback argument must be a function');
    error = true;
  }
  // If there are invalid arguments, return early to prevent errors from being thrown
  if (error) {
    return;
  }

  // If element does not exist, create it and append to DOM
  if (!window.document.getElementById('nwdirectory')) {
    var inputElement = window.document.createElement('input');
    inputElement.setAttribute('type', 'file');
    inputElement.setAttribute('id', 'nw-programmatic-folder-select');
    inputElement.setAttribute('nwdirectory', '');
    inputElement.setAttribute('style', 'display:none');
    inputElement.addEventListener('change', function (evt) {
      if (callback) {
        callback(evt.target.value);
      }
    });
    window.document.body.appendChild(inputElement);
  }

  // Modify element based on options
  var element = window.document.getElementById('nw-programmatic-folder-select');
  if (options && options.directory) {
    element.setAttribute('nwworkingdir', options.directory);
  } else {
    element.removeAttribute('nwworkingdir');
  }
  if (options && options.title) {
    element.setAttribute('nwdirectorydesc', options.title);
  } else {
    element.removeAttribute('nwdirectorydesc');
  }

  // Trigger a click event to cause the dialog to open
  element.click();
}

module.exports = openFolderExplorer;

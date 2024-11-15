'use strict';

let initiated = false;


exports.postAceInit = (hook_name, args, cb) => {
  console.log('postAceInit && ep__rehearsal-compiler init');
  initiated = true;
  cb();
};


exports.postToolbarInit = (hookName, context) => {
  const editbar = context.toolbar; // toolbar is actually editbar - http://etherpad.org/doc/v1.5.7/#index_editbar
  editbar.registerCommand('run', () => {
    console.log('run');
  });
  return true;
};

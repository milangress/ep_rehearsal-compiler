'use strict';


exports.postAceInit = function(hook, context){
    console.log("postAceInit && ep__rehearsal-compiler init");
    console.log(context);
    console.log(hook);
    return;
};


exports.postToolbarInit = (hookName, context) => {
  const editbar = context.toolbar; // toolbar is actually editbar - http://etherpad.org/doc/v1.5.7/#index_editbar
  editbar.registerCommand('run', () => {
    console.log("run");
  });
  return true;
};
'use strict';

const eejs = require('ep_etherpad-lite/node/eejs/');


exports.eejsBlock_editbarMenuLeft = (hookName, args, cb) => {
    console.log("eejsBlock_editbarMenuLeft");
    console.log(args);
  
    args.content += eejs.require('ep_rehearsal_compiler/templates/editbarbuttons.ejs');
    return cb();
  };


exports.padInitToolbar = (hookName, args, cb) => {
    const toolbar = args.toolbar;
  
    const runButton = toolbar.button({
      command: 'run',
      localizationId: 'ep_rehearsal_compiler.toolbar.run.title',
      class: 'buttonicon buttonicon-align-left ep_rehearsal_compiler',
    });

  
    toolbar.registerButton('run', runButton);

    return cb();
  };
const simpleGit = require('simple-git')().init()
     .add('./*')
     .commit("Git commit!")
     .addRemote('node_tool/git', 'https://github.com/srivastava29/Bank.git')
     .checkoutLocalBranch('node_check')
	  //checkoutBranch('node_check','https://github.com/srivastava29/Bank.git')
	  .push('node_check','node_check');
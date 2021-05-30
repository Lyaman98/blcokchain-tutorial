const TaskList = artifacts.require("./TaskList.sol");

module.exports = function(deployer) {
  deployer.deploy(TaskList);
};

//to change the state of the blockchain (basically which is a big database..)
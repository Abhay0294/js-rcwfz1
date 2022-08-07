function doHomeWork(callback) {
  console.log('Doing Homework');
  callback();
}

function copyHomeWork() {
  console.log('HomeWork copied');
}

doHomeWork(copyHomeWork);

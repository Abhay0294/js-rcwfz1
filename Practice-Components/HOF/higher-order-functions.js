function callMe() {
  console.log('Thanks for calling!!');
}

let button = document.getElementById('test-button');
button.addEventListener('click', callMe);

document
  .getElementById('test-button2')
  .addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('Hello Abhay', event);
    /* Do some other things*/
  });

document
  .getElementById('test-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    console.log(this.getAttribute('href'));
    /* Do some other things*/
  });

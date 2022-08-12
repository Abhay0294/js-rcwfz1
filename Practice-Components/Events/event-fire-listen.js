const button = document.querySelector('#test-button');

const evt = new CustomEvent('MyEvent', { detail: 'Any Object Here' });
window.dispatchEvent(evt);

button.addEventListener(
  'MyEvent',
  function (evt) {
    alert(evt.detail);
  },
  false
);

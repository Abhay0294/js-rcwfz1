const input = document.getElementById('input-element');

const counterButton = document.getElementById('counterButton');

const debounceFun = (func, delay) => {
  let debounce;
  return () => {
    const context = this;
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      func.apply(context);
    }, delay);
  };
};

const counterFun = () => {
  let count = 0;
  return () => input.setAttribute('value', ++count);
};

counterButton.addEventListener('click', debounceFun(counterFun(), 500), false);

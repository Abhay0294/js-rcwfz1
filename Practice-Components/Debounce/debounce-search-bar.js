let count = 0;
const getData = () => {
  //Make API calls to fetch data
  console.log('Fetching Data', ++count);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

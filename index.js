const input = document.querySelector('#search');
const result = document.querySelector('#result');

const debounce = (callback, delay = 3000) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const updateResult = debounce((text) => {
  result.textContent = text;
}, 1000);

input.addEventListener('input', (e) => {
  updateResult(e.target.value);
});

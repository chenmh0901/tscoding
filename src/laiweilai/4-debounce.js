function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

test('debounce', () => {
  const submitForm = jest.fn();
  const debounceSubmit = debounce(submitForm, 1000);

  debounceSubmit(1);
  debounceSubmit(2);
  debounceSubmit(3);
  debounceSubmit(4);
  debounceSubmit(5);
  debounceSubmit(6);
  debounceSubmit(7);
  debounceSubmit(8);

  jest.runAllTimers();

  expect(submitForm).toHaveBeenCalledTimes(1);
  expect(submitForm).toHaveBeenCalledWith(8);
})

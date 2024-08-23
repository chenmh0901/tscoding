// 模拟表单提交
function submitForm(index) {
  console.log('submit' + index);
}

// 请实现
function handleSubmit(func, timeout) {
  let lastCallTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCallTime >= timeout) {
      func.apply(this, args);
      lastCallTime = now;
    }
  };
}
// 实际执行函数
const submit = handleSubmit(submitForm, 1000);

// 测试用例
submit(1);
submit(2);

setTimeout(() => {
  submit(3);
  setTimeout(() => {
    submit(4);
    setTimeout(() => {
      submit(5);
      setTimeout(() => {
        submit(6);
        setTimeout(() => {
          submit(7);
          setTimeout(() => submit(8), 800);
        }, 200);
      }, 1000);
    }, 500);
  }, 200);
}, 100);

// 输出
// "submit1"
// "submit6"

async function foo() {
  console.log(1);
}

async function bar() {
  console.log(2);
  await foo();

  // 相当于 Promise.resolve().then(() => console.log(3))
  console.log(3);
}

bar();

console.log(4)

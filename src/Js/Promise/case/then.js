const MyPromise = require('../myPromise');

const promise = new MyPromise((resolve, reject) => {
  resolve('success');
} );

promise.then((value) => {
  console.log(value);
})

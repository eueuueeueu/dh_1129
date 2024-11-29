// // 函数
// // f(x) = 2x + 1
// // x自变量  f(x) 因变量
// // 如何定义函数
// // 需要使用function关键字
// function f(x) {
//   return (2 * x + 1);
// }
// function f1(x) {
//   console.log(3 * x + 3);
// }

// // 现有一函数的表达式为f(x) = 2x + 1 , 请问当x=4，f(x)等于多少？
// // 现有一函数的表达式为f(x) = 2x + 1 , 请问f(4)等于多少？
// let res = f(4)
// console.log(res);

// // 数组去重
// let arr1 = [1, 2, 5, 5, 6, 7, 4, 3, 2, 1, 34]
// function no_repetition(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
// console.log(no_repetition(arr1));


// function summary(a, b) {
//   return a + b
// }


// // 给任意一个数组的偶数求和
// let arr11 = [12, 3, 4, 4, 5, 56, 6, 7, 7, 7]
// let arr22 = [56, 6, 7, 7, 7, 8, 88, 888]
// function evenSum(arr) {
//   let res11 = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       res11 += arr[i]
//     }
//   }
//   return res11
// }
// console.log(evenSum(arr11));
// console.log(evenSum(arr22));


// function f3(a, b, c, d) {
//   console.log([a, b, c, d]);
// }
// // 函数的length属性表达的是函数有多少形参
// console.log(f3.length);
// // 调用函数时缺少参数的情况下默认为undefined
// f3(1, 2, 3)   //[1, 2, 3, undefined]


// let num1 = 123
// let num2 = 234
// let arr33 = [1, 2, 3, 4, 4, 6, 6, 7, 8, 9]
// function bar_foo(a, b, arr) {
//   return summary(a, b) + evenSum(arr)
// }
// console.log(bar_foo(num1, num2, arr33));





// // arguments是函数特有的 并且只能在函数内部使用的不用定义的变量
// function f7(a, b, c, d, e) {
//   console.log('形参的个数:', f7.length);
//   console.log('实参的个数:', arguments.length);
//   console.log(arguments);
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// f7(1, 2, 3, 4, 5)


// function f8() {
//   console.log(arguments);
//   let res = 0
//   for (let i = 0; i < arguments.length; i++) {
//     res += arguments[i]
//   }
//   console.log(res);
// }
// f8(1, 2, 3, 4, 5, 67, 8, 9, 4, 5, 1, 5, 8)
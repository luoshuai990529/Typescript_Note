// 定义两个接口  两个接口中有对应两个不同的方法
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}
// 联合类型，可以认为一个变量可能有两种或两种以上的类型

// 写一个judgeWho(判断是谁)的方法 (判断是谁)的方法，里边传入一个animal(任意值)，这时候可以能是Waiter,也可能是Teacher。
// 所以我们使用了联合类型，关键符号是|(竖线)。

// 第一种方式进行 类型断言
// function judgeWho(animal: Waiter | Teacher) {
//     //因为你不知道到底会是什么类型 因此就要用到： 类型保护-类型断言
//     if(animal.daocha){
//         (animal as Teacher).skill()
//     }else{
//         (animal as Waiter).say()
//     }
// }

// 第二种方法进行 类型断言 in
function judgeWho(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    console.log((animal as Teacher).skill());
    ;
  } else {
    console.log((animal as Waiter).say());
  }
}
judgeWho({
  anjiao: true,
  skill() {
    return "123";
  },
});
// 第三种方法进行 类型保护 typeof 语法
// 先来写一个新的add方法，方法接收两个参数，这两个参数可以是数字number也可以是字符串string,如果我们不做任何的类型保护，只是相加，这时候就会报错。
// 直接使用typeof来进行解决。
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

// 第四种 类型保护-instanceof 语法
// 比如现在要作类型保护的是一个对象，这时候就可以使用instanceof语法来作。
class NumberObj {
  count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
console.log(addObj(new NumberObj(), new NumberObj()));

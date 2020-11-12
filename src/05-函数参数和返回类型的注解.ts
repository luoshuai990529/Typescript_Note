// 函数返回类型的注解：
function getSum(one: number, two: number): number {
  // return one+two +'' //这里因为函数返回值类型加了注解，所以会报错
  return one + two;
}
// total的值是可以推断出来的 所以不需要注解
const sum = getTotal(1, 2);

// void:无返回值
function sayHi(): void {
  // return '' //报错
  console.log("hello");
}

// never ：永远执行不完
function errorFn(): never {
  throw new Error();
  console.log("执行不完");
}

function forNever(): never {
  while (true) {}
  console.log("执行不完");
}

// 当函数接收一个对象的时候 这样写注解
function getNumber({ one }: { one: number }) {
  return one;
}
const one = getNumber({ one: 1 });

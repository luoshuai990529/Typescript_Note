// 1.基础静态类型 number string null undefinde boolean void symbol
const num: number = 529;
const myName: string = "shuai";

//2.对象类型
// 对象
const dabai: { name: string; age: number } = { name: "帅", age: 20 };
// 数组
const xiaobai: string[] = ["大白", "帅逼", "666"];
// 类类型 ：规定p1要为有Person类中的属性
class Person {}
const p1: Person = new Person();
console.log(p1);

// 函数类型 ：规定要返回一个字符串
const fn: () => string = () => {
  return "123";
};

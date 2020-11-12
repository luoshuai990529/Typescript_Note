// 1.定义数组类型的注解
let numberArr: number[] = [1, 2, 3];
let stringArr: string[] = ["苹果", "橘子"];
let undefindeArr: undefined[] = [undefined];

// 2.如果既有数字又有字符串，如何定义呢？
const arr: (number | string)[] = [29, "火龙果"];

// 3.当数组中包含多个对象时：
const objArr: { name: string; age: number }[] = [
  { name: "小吴", age: 20 },
  { name: "小红", age: 18 },
];
// 简化 讲注解抽取出来成一个 type：类型对象 或者 类
type Lady = { name: string; age: number };
// 或
class Madam {
  name: string;
  age: number;
}
// 可以在数组类型注解以 Lady或者 Madam来代替
const objArr2: Lady[] = [
  { name: "小吴", age: 20 },
  { name: "小红", age: 18 },
];

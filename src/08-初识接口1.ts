// 1、不使用接口实现如下逻辑：
// const screenResume = (name: string, age: number, weight: number) => {
//   age < 30 && weight <= 100 && console.log(name + "符合要求");
//   age >= 30 || (weight > 100 && console.log(name + "淘汰"));
// };
// const getResume = (name: string, age: number, weight: number) => {
//   console.log(name + "年龄是" + age);
//   console.log(name + "体重是" + weight);
// };
// screenResume("小胡", 20, 90);
// getResume("小胡", 20, 90)

// 2、使用接口来实现:减少重复代码
// interface Person {
//   name: string;
//   age: number;
//   weight: number;
//   //   如果我们希望这个值可有可无
//   bust?: number;
// }
// const person1 = {
//   name: "张三",
//   age: 19,
//   weight: 110,
//   bust:95
// };
// const screenResume = (person1: Person) => {
//   person1.age < 30 &&
//     person1.weight <= 100 &&
//     console.log(person1.name + "符合要求");
//   person1.age >= 30 ||
//     (person1.weight > 100 && console.log(person1.name + "淘汰"));
// };
// const getResume = (person1: Person) => {
//   console.log(person1.name + "年龄是" + person1.age);
//   console.log(person1.name + "体重是" + person1.weight);
//   person1.bust && console.log(person1.name + "胸围是：" + person1.bust);
// };
// screenResume(person1);
// getResume(person1);

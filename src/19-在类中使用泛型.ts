// class SelctGirls {
//   constructor(private girls: string[]) {}

//   getGirls(index: number): string {
//     return this.girls[index];
//   }
// }

// 1、使用泛型改造上面代码

// class SelctGirls<T> {
//   constructor(private girls: T[]) {}
//   getGirls(index: number): T {
//     return this.girls[index];
//   }
// }
// const selectGirl = new SelctGirls<string>(["小菲", "东东", "小丽"]);
// console.log(selectGirl.getGirls(2));

// 2、泛型中的继承
interface zGirls {
  name: string;
}
class SelctGirls<T extends zGirls> {
  constructor(private girls: T[]) {}
  getGirls(index: number): string {
    return this.girls[index].name;
  }
}
const selectGirl = new SelctGirls([
  { name: "小丽" },
  { name: "小红" },
  { name: "小仪" },
]);
console.log(selectGirl.getGirls(2));

//   3、泛型的约束
class SelctGirlso<T extends string | number> {
  constructor(private girls: T[]) {}
  getGirls(index: number): T {
    return this.girls[index];
  }
}
// 这里泛型只能定义为 string和number了
const selectGirlo = new SelctGirlso<string>(["小丽", "小红", "小仪"]);
console.log(selectGirlo.getGirls(2));

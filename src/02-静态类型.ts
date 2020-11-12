// 1.定义静态类型
let count: number = 1;
// count = "abc" 报错：count已经定义为number类型，就不能转为string了

// 2.自定义静态类型 interface接口
interface XiaoGeGe {
  username: string;
  age: number;
}

const shuaishuai: XiaoGeGe = {
  username: "帅",
  age: 20,
};
console.log(shuaishuai);//{ username: '帅', age: 20 }


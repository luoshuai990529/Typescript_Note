// 泛型

function addCount<T>(one: T, two: T) {
  return `${one}${two}`;
}
// 利用泛型我们就可以做到让 这个函数 第一个传什么类型 第二个就也必须传什么类型
addCount<string>("1", "1");
addCount<number>(10, 20);

// 定义多个泛型
function redcCount<T, P>(one: T, two: P) {
  return `${one}${two}`;
}
redcCount<string, number>('1',2);

// 使用泛型 规定数组
// 第一种方式 使用 Array<T>
// function myFun<T>(params:Array<T>){
//     return params;
// }
// 第二种 方式：
function myFun<Any>(params: Any[]) {
  return params;
}

// 数组里面只能穿 string
myFun<string>(["123", "345"]);

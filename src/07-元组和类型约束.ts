// 1.元组可以看做数组的加强版

// 例：当我们要规定一个类型并且有必须顺序的数组，数组注解还是不够
// const pArr: (string | number)[] = ["大白", 28, "IT"];
// 通过元组来实现：
const pArr: [string,string,number] = ["大白","IT", 28 ]; //如果不按照顺序会报错

// CSV
const csvArr : [string,string,number][] = [
    ['xiaosan','ys',29],
    ['xiaosi','qx',29],
    // ['xiaowu',29,'js'],//报错
]
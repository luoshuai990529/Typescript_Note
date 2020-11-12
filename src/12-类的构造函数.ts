/* 
    constructor构造函数就是在类被初始化的时候，自动执行的一个方法。
    我们通过这个构造方法经常作很多需要提前完成的工作，
    比如显示页面前我们要从后台得到数据。
*/

class Human {

    // public name :string 
    // constructor(name){
    //     this.name = name;
    // }
    // 上面的代码可以简化为下面这种写法
    constructor(public name:string){
        this.name = name;
    }
}
// 定义一个新的类继承Human
class Docter extends Human{
    /* 
        在子类里写构造函数时，必须用super()调用父类的构造函数，
        如果需要传值，也必须进行传值操作。就是是父类没有构造函数，
        子类也要使用super()进行调用，否则就会报错。
    */
    constructor(public age:number){
        super("小吴")
    }
}

let h1 = new Human("晓东")
console.log(h1.name);

let d1 = new Docter(18);
console.log(d1);




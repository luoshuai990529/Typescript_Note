// 类的定义
class Girs {
    content = "hi~"
    sayHi(){
        return this.content
    }
}

// 定义一个类继承 Girs
class Xiaohong extends Girs {
    // 重写父类的方法
    sayHi(){
        // 利用super调用父类
        return super.sayHi()+"你好 帅哥"
    }
    sleep(){
        return '睡觉'
    }
}
const xiaohong = new Xiaohong()
console.log(xiaohong.sleep());
console.log(xiaohong.sayHi());



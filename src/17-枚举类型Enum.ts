// enum

// const Status={
//     MESSAGE:0,
//     SPA:1,
//     DBJ:2
// }

// function getServe(status:number){
//     if(status === Status.MESSAGE ){
//         return "message"
//     }else if(status === Status.SPA){
//         return "SPA"
//     }else if(status === Status.DBJ){
//         return "dbj"
//     }
// }

// const result = getServe(0)
// console.log(`我要去${result}`);

// 使用枚举实现上部分代码
enum Status{
    MESSAGE,
    SPA,
    DBJ
}

console.log(Status.MESSAGE); //0
console.log(Status.SPA); // 1
console.log(Status.DBJ); // 2

function getServe(status:number){
    if(status === Status.MESSAGE ){
        return "message"
    }else if(status === Status.SPA){
        return "SPA"
    }else if(status === Status.DBJ){
        return "dbj"
    }
}
// 这时输入 012 或者 Status.DBJ 都是可以的
const result1 = getServe(0)
console.log(`我要去${result1}`);
const result2 = getServe(Status.DBJ)
console.log(`我要去${result2}`);



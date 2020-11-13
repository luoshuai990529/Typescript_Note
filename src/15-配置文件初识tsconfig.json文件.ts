// tsconfig.json

/* 
    include包含的文件可以被exclude排除，而files包含的不会被排除
    "files":   ["只编译的文件"]
    "include": ["只编译的文件"]
    "exclude":["除了这个文件别的都编译"]
    compilerOptions:{
    
        removeComments:编译完是否去除注释

        "strict": 严格模式，这个为true 则下面的都为true，如果要配置下面的那么要把strict注释掉
          "noImplicitAny":  true允许你的注解类型any 不用特意申明：
          "strictNullChecks": true 不允许你变量中有null出现
          "strictFunctionTypes":
          "strictBindCallApply":
          "strictPropertyInitialization":
          "noImplicitThis":
          "alwaysStrict":

        "sourceMap": true 信息文件 js文件和ts文件一个映射的关系 xxx.js.map ,用来排查错误
        "outFile":"./build/page.js" 配置只生成一个文件
        "outDir": "./build", 编译后存放在哪里  
        "rootDir": "./src", 
        "noUnusedLocals":true 如果有没有使用的变量，我们打包的时候就会给我们提示
        "noUnusedParameters":true 同上  这里是方法
    } 
    


*/

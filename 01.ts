let a: number;
a=1;
// a= 'e'; //error
//虽然有错误，但依然可以编译生成js文件

let b: string;
b='23';
// b=23 
//声明赋值
let c:boolean=true;
// c=0

//给函数的参数，返回值进行类型限制
function sum(a:number,b:number):number {
    return a+b
}

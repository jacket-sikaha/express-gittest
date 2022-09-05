//直接使用字面量进行类型声明
let aa: 10;
let as: number;
// aa = 2;

let bb: "男" | "1"; //限制值的类型和值
// bb = "asdasd";
// bb=1

let cc: boolean | number;
cc = false;
cc = 12312;

//any 任意类型
let d: any;
// let d; //这种声明方式，ts解析器会自动判断变量类型为any
d = 10;
d = "12";
d = true;

//unknown   表示未知类型
let e: unknown;
e = 10;
e = "12";
e = true;

as = d as number; //any类型可以赋给任何变量
// a = e; //error  unknown变量不可以赋给任何变量，他是安全的any
// 如何避免e编译报错
if (typeof e === "number") {
  as = e;
}
//类型断言，用来告诉解析器变量的实际类型
as = e as number;
as = <number>e;

//没有返回值
function fn(): void {
  return undefined;
}
fn();
//never 永远不会返回结果
function fn2(): never {
  throw new Error("error");
}

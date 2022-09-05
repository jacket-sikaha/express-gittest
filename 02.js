//直接使用字面量进行类型声明
var aa;
var as;
// aa = 2;
var bb; //限制值的类型和值
// bb = "asdasd";
// bb=1
var cc;
cc = false;
cc = 12312;
//any 任意类型
var d;
// let d; //这种声明方式，ts解析器会自动判断变量类型为any
d = 10;
d = "12";
d = true;
//unknown   表示未知类型
var e;
e = 10;
e = "12";
e = true;
as = d; //any类型可以赋给任何变量
// a = e; //error  unknown变量不可以赋给任何变量，他是安全的any
// 如何避免e编译报错
if (typeof e === "number") {
  as = e;
}
//类型断言，用来告诉解析器变量的实际类型
as = e;
as = e;
//没有返回值 返回undefined可以
function fn() {
  return undefined;
}
fn();
//never 永远不会返回结果
function fn2() {
  throw new Error("error");
}

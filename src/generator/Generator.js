
function* g() {
    yield "a";
    yield "b";
    yield "c";
    return "ending";
}
console.log(g()); //返回迭代器器Iterator

const gen = g();
// console.log(gen.next()) // 返回结果对象 // // { value: 'a', done: false }
// // value是yield后⾯面表达式的结果
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// 使⽤用递归函数执⾏行行⽣生成器器⾥里里⾯面所有步骤
function next(){
let { value, done } = gen.next() //
// 启动
console.log(value) // 依次打印输出 a b c end
 if(!done) next() // 直到迭代完成
}
next()
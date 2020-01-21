
// 使⽤用Generator顺序执⾏行行两次异步操作
function* r(num) {
const r1 = yield compute(num);
yield compute(r1);
}
// compute为异步操作，结合Promise使⽤用可以轻松实现异步操作 队列列
function compute(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            const ret = num * num; console.log(ret); // 输出处理理结果
           resolve(ret); // 操作成功
        }, 1000); });
}
// 不不使⽤用递归函数调⽤用
let it = r(2);
//   {value:Promise,done:false}
// it.next().value.then(num => it.next(num));
// 修改为可处理理Promise的next
function next(data) {
let { value, done } = it.next(data); // 启动
if (!done) {
value.then(num => {
    next(num);
});
}
}
next();
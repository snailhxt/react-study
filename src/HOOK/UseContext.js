import React,{useContext} from 'react';
import Child from './UseContextChild'
import {Context1,Context2} from "./store/index";

function UseContext(props) {
    const ctx=useContext(Context1)
    console.log(ctx)
    return (
        <div>
            <h1>使用useContext</h1>
            <div>我是{ctx.name}</div>
            <div>我是{ctx.age}</div>
            <p>使用子组件</p>
            <Child></Child>
        </div>
    );
}

export default UseContext;



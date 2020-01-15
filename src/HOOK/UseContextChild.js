import React,{useContext} from 'react';
import {Context1,Context2} from "./store/index";
function UseContext() {
const ctx=useContext(Context2)
    return (
        <div>
            <div>我是{ctx.name}</div>
            <div>我是{ctx.age}</div>
        </div>
    );
}

export default UseContext;



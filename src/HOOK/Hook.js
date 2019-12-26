import React,{useState,useEffect} from "react";


function Effect(props) {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        //副作用处理
        document.title=`你点击了${count}次`
        return ()=>{
            console.log("组件卸载或更新了")
        }
    },[])
    return (
        <div>
            <div>你点击{count}次</div>
            <button onClick={()=>setCount(count+1)}>count+1</button>
        </div>
    );
}

function Hook(props) {
    const [count,setCount]=useState(10)
    return (
        <div>Hook
        <div>你点击{count}次</div>
            <button onClick={()=>setCount(count+1)}>count+1</button>
            <button onClick={()=>setCount(count-1)}>count+1</button>
            {count>=10? <Effect></Effect>:null}

        </div>
    );
}

export default Hook;
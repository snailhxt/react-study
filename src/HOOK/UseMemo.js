import React,{useMemo,useCallback,useRef} from 'react';

const UseRefComp=()=>{
    const inputref=useRef()
    const getValue=()=>{
        console.log(inputref.current.value)
    }
    return(
        <div>
            <input ref={inputref} type="text"></input>
            <button onClick={getValue}>获取input的值</button>

        </div>
    )


}

function UseMemo(props) {
    const obj1={taller:'180',name:'tim',age:'15'}
    const obj2={taller:'170',name:'jerry',age:'18',sex:'女'}
    //使用UseMemo
    // const memoValue=useMemo(()=>Object.assign(obj1,obj2),[obj1,obj2])

    //使用useCallback
    const memoCallback=useCallback(()=>Object.assign(obj1,obj2),[obj1,obj2])

    console.log(memoCallback)
    return (
        <div>
            <p>
                姓名：{memoCallback().name}
            </p>
            <UseRefComp></UseRefComp>
        </div>
    );
}

export default UseMemo;
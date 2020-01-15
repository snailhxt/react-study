import React,{useReducer} from 'react';


const initState={count:0}



const reducer=(state,action)=>{
    //根据我们传入的action去更新我们的state
switch (action.type) {
    case 'reset':
        return initState;
    case 'add':
        return {count: state.count+1};
    case 'reduce':
        return {count: state.count-1};
    default:
        return state;

}
}
function UseReducerComp(props) {

    const [state,dispatch]=useReducer(reducer,initState)
    return (
        <div>
          <p>当前数量为：{state.count}</p>
            <div>
                <button onClick={()=>dispatch({type:'reset'})}>重置</button>
                <button onClick={()=>dispatch({type:'add'})}>+1</button>
                <button onClick={()=>dispatch({type:'reduce'})}>-1</button>
            </div>
        </div>
    );
}

export default UseReducerComp;
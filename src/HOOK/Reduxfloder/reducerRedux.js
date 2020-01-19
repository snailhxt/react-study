import React, {Component} from 'react';
import { connect } from 'react-redux'
import store from './store'
import {firstReducer,add,reduce,asyncAdd} from './reducer'
@connect(
    state=>({count:state}),
    {firstReducer,add,reduce,asyncAdd},
)
class FirstRedux2 extends Component {
    render() {
        return (
            <div>
                <h1>学习redux，编写第一个redux累加器</h1>
            {/*    通过store的getstate方法获取状态数据*/}
            {/*    {store.getState()}*/}
                {this.props.count}
                <div>
                    {/*<button onClick={()=>store.dispatch({type:'add'})}>+1</button>*/}
                    {/*<button onClick={()=>store.dispatch({type:'reduce'})}>-1</button>*/}
                    <button onClick={()=>this.props.add()}>+1</button>
                    <button onClick={()=>this.props.reduce()}>+1</button>
                    <button onClick={()=>this.props.asyncAdd()}>延时+1</button>

                </div>
            </div>
        );
    }
}

export default FirstRedux2;
import React, {Component} from 'react';
import store from './store'

class FirstRedux extends Component {
    render() {
        return (
            <div>
                <h1>学习redux，编写第一个redux累加器</h1>
            {/*    通过store的getstate方法获取状态数据*/}
                {store.getState()}
                <div>
                    <button onClick={()=>store.dispatch({type:'add'})}>+1</button>
                    <button onClick={()=>store.dispatch({type:'reduce'})}>-1</button>

                </div>
            </div>
        );
    }
}

export default FirstRedux;
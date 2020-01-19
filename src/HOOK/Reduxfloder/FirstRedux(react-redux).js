import React, {Component} from 'react';
import { connect } from 'react-redux'
import store from './store'
//写一个返回数据的⽅方法，供connect使用，connect会帮我们把数据 转换成props
const mapStateToProps =(state) => {
    return {
        count:state
    } }


//写一个返回dispatch⽅方法的⽅方法供connect使用，connect帮我们把dispatch转换成props
const mapDispatchToProps = (dispatch) =>{
    return {

        add:()=>dispatch({type:'add'}),
        reduce:()=>dispatch({type:'reduce'})
    }
}
class FirstRedux1 extends Component {
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

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (FirstRedux1);
import React, {Component} from 'react';

class LifeCyclesyn extends Component {
    constructor(props){
        super(props)
        console.log("构造函数")
    }
    componentWillMount() {
        console.log("组件将要挂载")
    }
    componentDidMount() {
        console.log("组件已经挂载，我们可以进行dom操作")
    }

componentWillReceiveProps(nextProps, nextContext) {
        //父组件传递的属性有变化，我们可以在这里做相应的响应操作
        console.log("父组件属性更新")
}
shouldComponentUpdate(nextProps, nextState, nextContext) {
        //组件是否需要更新，需要返回一个布尔值，返回true则更新，返回false则不更新
    console.log("组件是否需要更新，返回布尔值")
    return true
}
componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('组件将要更新')
}
componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("组件已经更新")

}
componentWillUnmount() {
        console.log("组件已经销毁")
}

    render() {
        console.log("组件已经渲染")
        return (
            <div>

                组件生命周期
            </div>
        );
    }
}
class LifeCycle extends Component {
    constructor(props){
        super(props)
        this.state={
           son:'snail',
            showSon:true
        }
        setTimeout(()=>{
            this.setState({
                son:'update',

            })
},2000)
        setTimeout(()=>{
            this.setState({

                showSon: false
            })
        },4000)
    }
    render() {
        return (
            <div>
                {this.state.showSon? <LifeCyclesyn title={this.state.son}></LifeCyclesyn>:<div>组件已销毁</div>}
                {/*<LifeCyclesyn title={this.state.son}></LifeCyclesyn>*/}
            </div>
        );
    }
}

export default LifeCycle;
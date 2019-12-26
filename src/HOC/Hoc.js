import React, {Component} from 'react';
//编写一个高阶组件，传递一个组件进去，返回一个新的组件出来（返回的是函数组件）
const withLearnReact=(Comp)=>{
    const NewComp=(props)=>{
        return<Comp {...props} name="欢迎学习高阶组件"></Comp>
    }
    return NewComp
}
//编写第二个高阶组件 重写生命周期需要的class组件（返回class组件）
const withLifeCycle=(Comp)=>{
    class NewComp extends Component{
        //重写生命周期
        componentDidMount() {
            console.log('重写生命周期')
        }

        render() {
            return <Comp {...this.props}></Comp>
        }
    }
    return NewComp
}
@withLearnReact
@withLifeCycle
class Hoc extends Component {
    render() {
        return (
            <div>
                高阶组件
                <h1>{this.props.title}</h1>

                <h2> {this.props.name}</h2>
            </div>
        );
    }
}

// export default withLifeCycle(withLearnReact(Hoc));
export default Hoc
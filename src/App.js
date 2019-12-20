import React, {Component} from 'react';
import ProsDemo from "./ProsDemo";
import ConditionLoop from "./ConditionLoop"

class App extends Component {
    constructor(props){

        super(props);
        this.state={
            msg1: "111111",
            count:0
        }

    }
    componentDidMount() {
        //这是传统写法
// this.setState({
//     count:this.state.count+1
// },()=>{
//     console.log(this.state.count,"这里是回调，后输出的")
//     }
//
// )
//         console.log(this.state.count,"这里是先输出的")
        //写法2
        // this.setState((prevState,prevProps)=>{
        //     return{
        //         count: prevState.count+1
        //     }
        //
        // })
        //写法2上的精简写法
        this.setState((prevState,prevProps)=>({
            count: prevState.count+1
        }),()=>{
            console.log(this.state.count,"这里是回调，后输出的")
        })
        console.log(this.state.count,"这里是先输出的")
    }

    render() {
        return (
            <div>
               <p>huanying</p>
                <h1>{this.state.msg1}</h1>
                <h2>{this.state.count}</h2>
                {/*组件属性传递props*/}
                <ProsDemo title="ProsDemo"></ProsDemo>
                {/*条件渲染和数据循环渲染*/}
                <ConditionLoop title="ConditionLoop"></ConditionLoop>
            </div>
        );
    }
}

export default App;
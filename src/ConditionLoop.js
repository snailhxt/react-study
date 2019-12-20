import React, {Component} from 'react';

class ConditionLoop extends Component {
    constructor(props){
        super(props)
        this.state={
            showTitle:true,
            goods: [
                { title: 'html+css基础⼊入⻔门', price: 19.8},
                { title: 'react零基础进阶单⻚页⾯面项⽬目实战', price: 59.8},
            ]
        }
setTimeout(()=>{
    this.setState({
        showTitle:false
    })
},3000)
    }
    render() {
        let result=<h1>{this.state.showTitle?<h2>{this.props.title}</h2>:null}</h1>
        return (
            <div>
                {/*条件渲染的第一种写法*/}
                {/*<h1>{this.state.showTitle?<h2>{this.props.title}</h2>:null}</h1>*/}
            {/*    条件渲染的第二种写法*/}
                {result}
            {/*    条件渲染第三种方法是写if else*/}
            <ul>
                {this.state.goods.map(good=>{
                    return <li key={good.title}>
                        <span>
                            {good.title}
                        </span>
                        <span>
                            {good.price}
                        </span>
                    </li>
                })}
            </ul>
            </div>
        );
    }
}

export default ConditionLoop;
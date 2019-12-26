import React, {Component,PureComponent} from 'react';



const Title1=React.memo((props)=>{
    return(
        <div>
            标题:{props.title}
        </div>
    )
})

class Title extends PureComponent {
// shouldComponentUpdate(nextProps, nextState, nextContext) {
//     return nextProps.title!==this.props.title
// }

    render() {
        console.log('title组件')
        return (
            <div>
标题:{this.props.title}
            </div>
        );
    }
}
class Count extends Component {
    render() {
        console.log('Count组件')
        return (
            <div>
条数:{this.props.count}
            </div>
        );
    }
}

class PureComponent1 extends Component {
    constructor(props){
        super(props)
        this.state={
        title:'title-snail',
        count:0
        }
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({
              count:this.state.count+1
            })
        },2000)
    }

    render() {
        return (
            <div>
                <Title title={this.state.title}></Title>
                <Count count={this.state.count}></Count>
                <Title1 title={this.state.title}></Title1>
                PureComponent
            </div>
        );
    }
}

export default PureComponent1;
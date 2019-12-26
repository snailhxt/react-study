import React, {Component} from 'react';
//演示使用上下文context
let store={
    name:"我是Tim",
    from:"我来⾃自⼩小D课堂"
}
//创建上下文
const XDContext=React.createContext()
const{Provider,Consumer}=XDContext
class Info extends Component{
    render(){
        return (
            <Consumer>
                {
                    store=>{
                        return(
                            <div>

                                <p>姓名:{store.name}</p>
                                <p>出处:{store.from}</p>
                            </div>
                        )
                    }
                }

            </Consumer>
        ) }
    }

function ToolBar(){
    return (
        <div>
            <Info ></Info>
        </div>
    ) }
class Context extends Component {
    render() {
        return (
            <div>
                <Provider value={store}>
                    <ToolBar ></ToolBar>
                </Provider>

            </div>
        );
    }
}

export default Context;
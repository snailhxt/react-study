import React from "react";
import ReactDOM from "react-dom"  //渲染库
// import App from './App'
// import LifeCycle from './LifeCycle'
// import App1 from './App1'
// import PureComponent from './PureComponent'
// import  Composition from './Composition'
// import Hoc from './HOC/Hoc'
// import Context from './HOC/Context'
// import Hook from './HOOK/Hook'
// import UseContext from './HOOK/UseContext'
// import UseReducerComp from './HOOK/UseReducerComp'
// import  UseMemo from './HOOK/UseMemo'
// import  FirstRedux from './HOOK/Reduxfloder/FirstRedux'
// ReactDOM.render(<App></App>,document.getElementById('root'))
//演示生命周期

// ReactDOM.render(<LifeCycle></LifeCycle>,document.getElementById('root'))

//演示antd组件库
// ReactDOM.render(<App1></App1>,document.getElementById('root'))

//ReactDOM.render(<PureComponent></PureComponent>,document.getElementById('root'))
//组件复合
// ReactDOM.render(<Composition></Composition>,document.getElementById('root'))

//高阶组件

// ReactDOM.render(<Hoc title="hoctitle"></Hoc>,document.getElementById('root'))
//上下文
// ReactDOM.render(<Context ></Context>,document.getElementById('root'))
//HOOK
// ReactDOM.render(<Hook ></Hook>,document.getElementById('root'))
//useContext

// ReactDOM.render(<FirstRedux ></FirstRedux>,document.getElementById('root'))

// const render=()=>{
//     ReactDOM.render(<FirstRedux ></FirstRedux>,document.getElementById('root'))
//
// }
// render()
// store.subscribe(render)

import { Provider } from 'react-redux'
import  FirstRedux1 from './HOOK/Reduxfloder/FirstRedux(react-redux)'
import FirstRedux2 from './HOOK/Reduxfloder/FirstReduxGaoJie'
import {createStore,applyMiddleware} from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {firstReducer} from './HOOK/Reduxfloder/reducer'
// const store = createStore(firstReducer,applyMiddleware(thunk,logger))
//
// ReactDOM.render(
//     <Provider store={store}>
//         <FirstRedux2></FirstRedux2>
//     </Provider>  ,
//     document.getElementById('root'))
import Sample from './ReactRouter/Sample'
import SagaSample from './Saga/Saga-Sample'

ReactDOM.render(<SagaSample ></SagaSample>,document.getElementById('root'))
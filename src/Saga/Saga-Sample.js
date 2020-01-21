import React, {Component} from 'react';
import {BrowserRouter,Link,Route,Switch,Redirect} from "react-router-dom";
import {connect,Provider} from 'react-redux'
import store from './index'
import {login} from './Userredux'
function App() {
 return(
     <div>
         {/*路由导航*/}
         <ul>
             <li>
                 <Link to="/">首页</Link>
             </li>
             <li>
                 <Link to="/class">课程</Link>

             </li>
             <li>
                 <Link to="/mine">我的</Link>

             </li>
             <li>
                 <Link to="/none">404</Link>

             </li>
         </ul>
     {/*    路由配置*/}
     <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route path="/class" component={Class}></Route>
         <Route path="/login" component={Login}></Route>
         {/*<Route path="/mine" component={Mine}></Route>*/}
         <RouteGuard path="/mine" component={Mine}></RouteGuard>
     {/*演示路由传参取参*/}
         <Route path="/detail/:course" component=
             {Detail}></Route>

         {/*404组件*/}
         <Route  component={NotFound}></Route>
     </Switch>
     </div>
 )
}
//编写路由守卫组件进行权限控制
@connect(state=>({isLogin: state.user.isLogin}))
class RouteGuard extends Component{
    render() {
        // component:Componnent 表示重命名成大写
        const {component:Component,...otherProps}=this.props
        return(
            <Route {...otherProps} render={props=>(this.props.isLogin?<Component {...props}></Component>:(<Redirect to={{pathname:"/login",
                    state:{form:props.location.pathname}}}></Redirect>))}>
                    </Route>
        )
    }
}
@connect(
    state=>({isLogin: state.user.isLogin}),
    {login}
    )
class Login extends Component{
    // state={
    //     isLogin:false
    // }
//     login=()=>{
// auth.login(()=>{
//     this.setState({
//         isLogin:true
//     })
// })
//     }
    render() {
        //回调地址
        const from=(this.props.location.state&&this.props.location.state.form)||'./'
        if (this.props.isLogin){
            return (<Redirect to={from}></Redirect>)
        }
        return(
            <div>
                <p>请先登录</p>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }



}
//模拟接口
// const auth={
//     isLogin:false,
//     login(callback){
//         this.isLogin=true
//         setTimeout(callback)
//     }
// }
function Detail({match,location,history}) {
    console.log({match,location,history})
    return(
        <div>
            我是{match.params.course}详情页
            <button onClick={()=>{history.push({pathname:'/',state:{foo:'bar'}})}}>返回首页</button>
        </div>
    )
}
function Home({location}) {
    return(
        <div>首页

            {location.state&&location.state.foo?<p>详情页带回的参数{location.state.foo} </p>:null}

        </div>
    )

}
function Class() {
    return(
        <div>课程
        <ul>
            <li>
                <Link to='/detail/react'>react</Link>


            </li>
            <li>
                <Link to='/detail/vue'>vue</Link>
            </li>

        </ul>
        </div>
    )

}
function Mine() {
    return(
        <div>
            <h2>个人中心</h2>
            <ul>
                <li>
                    <Link to='/mine/userinfo'>个人信息</Link>
                </li>
                <li>
                    <Link to='/mine/order'>客户订单</Link>
                </li>
            </ul>
        {/*    路由配置*/}
            <Switch>
                <Route path="/mine/userinfo" component={()=>(<div>个人信息</div>)}></Route>
                <Route path="/mine/order" component={()=>(<div>客户订单</div>)}></Route>
            {/*    路由重定向，都没有命中路由配置时，显示重定向路由的内容*/}
            <Redirect to='/mine/order'></Redirect>

            </Switch>
        </div>
    )

}
function NotFound() {
    return(
        <div>404</div>
    )

}
function SagaSample(props) {
    return (
        <div>
            <h1>路由使用主页面</h1>
            <BrowserRouter>
                <Provider store={store}>
                <App>

                </App>
            </Provider>
            </BrowserRouter>
        </div>
    );
}

export default SagaSample;
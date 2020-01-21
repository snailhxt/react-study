import {call,put,takeEvery} from 'redux-saga/effects'
import {message} from "antd";

//编写模拟登录接口
const api={
    login(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                //通过一个随机数去判断登录成功还是失败概率各占一半
                if(Math.random()>0.5){
                    //登录成功
                    resolve({id:1,name:'tim'})
                }
                else {
                    reject({message:'用户名密码错误'})
                }
            },1000)
        })
    }
}

//编写真正工作的saga ES6里面的星星函数
function* login(action){
    try{
        //call调用异步方法
        const res=yield call(api.login)
        //put派发action，触发reducer
        yield put({
            type:'login',res
        })
    }
    catch(error){
        yield put({
            type:'login-fail',message:error.message
        })

    }

}

function* mySaga(){
    //事件监听，监听我们action来了就触发一个函数，其实是触发上面的login星星函数
    yield takeEvery('login_request',login)
}
export default mySaga
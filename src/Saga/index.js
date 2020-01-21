
import { createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import { firstReducer as count } from "../HOOK/Reduxfloder/reducer"
import user from "./Userredux"
import createSagaMiddleware from 'redux-saga'
import saga from './Saga'

//第⼀步、创建我们的中间件
const mid = createSagaMiddleware()
//第⼆部，应⽤用中间件
const store = createStore(
//当我们reducer多的时候我们要做reducer模块化
combineReducers({ count, user }),
    applyMiddleware(mid, logger)
)
//第三部，执行saga，把监听事件跑起来
 mid.run(saga)
export default store
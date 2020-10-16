import { call,fork,take,put,delay,takeLatest, takeEvery,select} from "redux-saga/effects";
import {  addTaskFailed, addTaskSuccess, deleteTaskFailed, deleteTaskSuccess, fetchListTask, fetchListTaskFailed, fetchListTaskSuccess, updateTaskFailed, updateTaskSuccess } from "../actions/task";
import { getList, addTask ,updateTask,deleteTask} from "../apis/task";
import { STATUSES, STATUS_CODE } from "../constants";
import * as taskTypes from "../constants/task";
import {showLoading,hideLoading} from '../actions/ui'
import { hideModal } from "../actions/modal";

/*
    B1: thuc thi action fetch task
    B2: call api
    2.1 Hien thi loading
    B3: check status code 
        3.1 neu thanh cong 
        3.2 neu that bai
    B4: Tat loading
    B5: thuc thi cv tiep theo 

*/

// take lang nghe theo doi action
function* watchFetchListTaskAction(){
    while(true){
        const action = yield take(taskTypes.FETCH_TASK)// khi FETCH_TASK duoc dispatch => code tu day tro xuong se chay
        yield put(showLoading())
    // =================Block=============
        const {params} = action.payload
    // console.log('Chi khi nao dispatch action fetch_task thi console ms dc thuc thi')
    // dau vao cua call la function , function nay la fn goi api
    const res = yield call(getList,params)
    // =================Block cho den khi call xong=============
    // console.log('res:',res)
    const {status,data} = res
    if(status === STATUS_CODE.SUCCESS){
        // dispatch action fetch_task_success
        yield put(fetchListTaskSuccess(data))
    }else{
        // dispatch action fetch_task_false
        yield put(fetchListTaskFailed(data))
    }
    yield delay(1000)
    yield put(hideLoading())
    }
}

function* filterTaskSaga({payload}){
    yield delay(500)
    const {keyword} = payload
    // const list = yield select(state => state.task.listTask)
    // const filterTask = list.filter(task => task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()))
    // // console.log(filterTask)
    // yield put(filterTaskSuccess(filterTask))
    yield put(fetchListTask({
        q: keyword
    }))
}

function* addTaskSaga({payload}){
    const {title,description} = payload
    yield put(showLoading())
    const resp = yield call(addTask,{
        title,
        description,
        status: STATUSES[0].value,
    })  
    // console.log(resp)
    const {data , status} = resp
    
    if(status === STATUS_CODE.CREATED){
        yield put(addTaskSuccess(data))
        yield put(hideModal())
    }else{
        yield put(addTaskFailed(data))
    }
    
    yield delay(500)
    yield put(hideLoading())
}

function* updateTaskSaga({payload}){
    const {title, description,status} = payload
    // lay du lieu trong store dung select 
    const taskEditing = yield select(state => state.task.taskEditing)
    yield put(showLoading())
    const res = yield call(updateTask,{title,description,status},taskEditing.id)
    const {data,status:statusCode} = res
    if(statusCode === STATUS_CODE.SUCCESS){
        yield put(updateTaskSuccess(data))
        yield put(hideModal())
    }else{
        yield put(updateTaskFailed(data))
    }
    yield delay(500)
    yield put(hideLoading())
}

function* deleteTaskSaga({payload}){
    const {id} = payload
    yield put(showLoading())
    const resp = yield call(deleteTask,id)
    const {data,status: statusCode} = resp
    if(statusCode === STATUS_CODE.SUCCESS){
        yield put(deleteTaskSuccess(id))
        yield put(hideModal())
    }else{
        yield put(deleteTaskFailed(data))
    }
    yield delay(500)
    yield put(hideLoading())
}

function* rootSaga(){
    yield fork(watchFetchListTaskAction)
    yield takeLatest(taskTypes.FILTER_TASK,filterTaskSaga)
    yield takeEvery(taskTypes.ADD_TASK,addTaskSaga)
    yield takeLatest(taskTypes.UPDATE_TASK,updateTaskSaga)
    yield takeLatest(taskTypes.DELETE_TASK,deleteTaskSaga)
}


export default rootSaga
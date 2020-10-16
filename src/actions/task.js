import * as taskConstants from '../constants/task'
import {STATUSES} from '../constants'

export const fetchListTask = (params = {}) => {
    return {
        type: taskConstants.FETCH_TASK,
        payload:{
            params
        }
    }
}
export const fetchListTaskSuccess = data => {
    return{
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}
export const fetchListTaskFailed = error => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload: {
            error
        }
    }
}

export const filterTask = keyword => {
    return{
        type: taskConstants.FILTER_TASK,
        payload:{
            keyword
        }
    }
}

export const filterTaskSuccess = data => {
    return{
        type: taskConstants.FILTER_TASK_SUCCESS,
        payload:{
            dataPayload: data,
        }
    }
}

export const addTask = (title,description) => {
    return{
        type: taskConstants.ADD_TASK,
        payload:{
            title,
            description
        }
    }
}
export const addTaskSuccess = task => {
    return{
        type: taskConstants.ADD_TASK_SUCCESS,
        payload:{
            task
        }
    }
}
export const addTaskFailed = err => {
    return{
        type: taskConstants.ADD_TASK_FAILED,
        payload:{
            err
        }
    }
}

export const setTaskEditing = taskEditing => {
    return{
        type:taskConstants.SET_TASK_EDITING,
        payload:{
            taskEditing
        }
    }
}

export const updateTask = (title,description,status = STATUSES[0].value) => {
    return{
        type:taskConstants.UPDATE_TASK,
        payload:{
            title,
            description,
            status
        }
    }
}
export const updateTaskSuccess = taskUpdate => {
    return{
        type:taskConstants.UPDATE_TASK_SUCCESS,
        payload:{
            taskUpdate
        }
    }
}
export const updateTaskFailed = errr => {
    return{
        type:taskConstants.UPDATE_TASK_FAILED,
        payload:{
            errr
        }
    }
}

export const deleteTask = id => {
    return{
        type: taskConstants.DELETE_TASK,
        payload:{
            id
        }
    }
}
export const deleteTaskSuccess = idTaskDelete => {
    return{
        type: taskConstants.DELETE_TASK_SUCCESS,
        payload:{
            idTaskDelete
        }
    }
}

export const deleteTaskFailed = errorr => {
    return{
        type: taskConstants.DELETE_TASK_FAILED,
        payload:{
            errorr
        }
    }
}

/*
QUA TRINH LAY DANH SACH TASK
B1: fetchListTaskRequest()
B2: reset state task => []
B3: call api sucess fetchListTaskSuccess(data resposne)
*/ 
// export const fetchListTaskRequest = () => {
//     return dispatch => {
//         dispatch(fetchListTask())
//         taskApi.getList()
//                .then(res => dispatch(fetchListTaskSuccess(res.data)))
//                .catch(error => dispatch(fetchListTaskFailed(error)))
//     }
// }
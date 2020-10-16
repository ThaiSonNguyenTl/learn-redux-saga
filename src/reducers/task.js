import * as taskConstants from '../constants/task'
import { toastError, toastSuccess } from '../helpers/toastHelper'
const initialState = {
    listTask: [],
    taskEditing:null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case taskConstants.FETCH_TASK:
            return {
                ...state,
            }
        case taskConstants.FETCH_TASK_SUCCESS:
            const {data} = action.payload
            return {
                ...state,
                listTask: data
            }
        case taskConstants.FETCH_TASK_FAILED:
            const {error} = action.payload
            toastError(error)
            return{
                ...state
            }
        case taskConstants.FILTER_TASK_SUCCESS:
            const {dataPayload} = action.payload
            return{
                ...state,
                listTask: dataPayload
            }
        case taskConstants.ADD_TASK: 
            return{
                ...state,
            }
        case taskConstants.ADD_TASK_SUCCESS:
            const {task} = action.payload
            toastSuccess('Add Task Success !')
            return{
                ...state,
                listTask: [task].concat(state.listTask)
            }
        case taskConstants.ADD_TASK_FAILED:
            const {err} = action.payload
            toastError(err)
            return{
                ...state
            }
        case taskConstants.SET_TASK_EDITING:
            const {taskEditing} = action.payload
            return{
                ...state,
                taskEditing
            }
        
        case taskConstants.UPDATE_TASK:
            return{
                ...state
            }
        case taskConstants.UPDATE_TASK_SUCCESS:
            const {taskUpdate} = action.payload
            const {listTask} = state
            const index = listTask.findIndex(item => item.id === taskUpdate.id)
            if(index !== -1){
                const newList = [
                    ...listTask.slice(0,index),
                    taskUpdate,
                    ...listTask.slice(index+1)
                ]
            toastSuccess('Update Task Success ')
                return{
                    ...state,
                    listTask:newList
                }
            }
            return{
                ...state
            }
        case taskConstants.UPDATE_TASK_FAILED:
            const{errr} = action.payload
            toastError(errr)
            return{
                ...state
            }
        case taskConstants.DELETE_TASK:
            return{
                ...state
            }
        case taskConstants.DELETE_TASK_SUCCESS:
            const {idTaskDelete}= action.payload
            toastSuccess('Delete Task Success')
            return{
                ...state,
                listTask:state.listTask.filter(item => item.id !== idTaskDelete)
            }
        case taskConstants.DELETE_TASK_FAILED:
            const {errorr}= action.payload
            toastError(errorr)
            return{
                ...state
            }
        default:
            return state
    }
}
export default reducer
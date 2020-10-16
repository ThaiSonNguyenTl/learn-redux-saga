import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants/';
import qs from 'query-string'
const url = 'tasks'

export const getList = (params = {}) => {
    let queryParams = ''
    // console.log(params)
    if(Object.keys(params).length > 0){
        queryParams = `?${qs.stringify(params)}`
    }
    return axiosService.getRequest(`${API_ENDPOINT}/${url}${queryParams}`)
}
export const addTask = data => {
    return axiosService.postRequest(`${API_ENDPOINT}/${url}`,data)
}

//http://localhost:3000/tasks/:id
export const updateTask = (data,taskId) => {
    return axiosService.putRequest(`${API_ENDPOINT}/${url}/${taskId}`, data)
}

export const deleteTask = taskId => {
    return axiosService.deleteRequest(`${API_ENDPOINT}/${url}/${taskId}`)
}
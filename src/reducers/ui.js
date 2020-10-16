import * as types from '../constants/ui'

const initialState = {
    showLoading:false
}

const reducer = (state= initialState,action) => {
    switch(action.type){
        case types.SHOW_LOADING:
            return {
                showLoading: true
            }
        case types.HIDE_LOADING:
            return {
                showLoading: false
            }
        default:
            return state
    }
}
export default reducer
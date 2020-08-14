import * as actionTypes from '../action';

const initialState = {
    resultList: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAILS:
            console.log("reducers..."+action.value[0].country);
            return {
                ...state,
                resultList:action.value

            }
        case actionTypes.GET_DETAILS_FAILURE:
return {
    ...state,
    resultList: {
        resultList: []
    }
}
        case actionTypes.GET_DETAILS_SUCESS:
return {
    ...state,
    resultList: action.value
}
        case actionTypes.SORT_BY_CHANGE:
return {
    ...state,
    resultList: [...action.value]
}
        case actionTypes.FILTER:
return {
    ...state,
    resultList: [...action.value]
}
        default:
return state;
    }
}
export default rootReducer;
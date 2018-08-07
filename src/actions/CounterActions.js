import * as ActionTypes from './ActionTypes';

const onIncrement = (value) => {
    return {
        type: ActionTypes.ON_INCREMENT,
        payload: {
            value
        }
    }
} 

const onDecrement = (value) => {
    return {
        type: ActionTypes.ON_DECREMENT,
        payload: {
            value
        }
    }
}

export default {
    onIncrement,
    onDecrement
}
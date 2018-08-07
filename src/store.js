import { createStore } from 'redux'; 
import reducers from  './reducers'; 

const cfgStore = () => {
    return createStore(
        reducers
    )
}

export default cfgStore; 
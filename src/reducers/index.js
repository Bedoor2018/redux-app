import {INCREMENT,DECREMENT} from '../actions/types'

export default function (state=0,action) {
    console.log(action,"action")
    console.log(state,"state")
    if(action.type==INCREMENT){
       return state+1;
    }
    if(action.type==DECREMENT){
        return state-1;
    }else{
        return state;
    }
}
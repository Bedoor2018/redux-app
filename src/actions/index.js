import {INCREMENT,DECREMENT} from './types'



//action creater
export const onIncrement = () => {
    return{type: INCREMENT }};

     export const onDecrement = () => {

        return{
            type: DECREMENT,
         } };
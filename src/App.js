import './App.css';
import {onIncrement,onDecrement} from './actions/index';
import {useSelector,useDispatch} from 'react-redux';

export default function App() {
// console.log(onIncrement())
// console.log(onDecrement())
const value=useSelector((state)=>state)
const despatch=useDispatch();
  return (
    <div className="App">
     <p>
       Counter: {value}
       <button onClick={()=>{despatch(onIncrement())}}>+</button>
       <button onClick={()=>{despatch(onDecrement())}}>-</button>
     </p>
    </div>
  );
}

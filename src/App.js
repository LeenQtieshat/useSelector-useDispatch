import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {increaseAction,decreaseAction,toggleCounter} from "./actions"


function App() {
 const state = useSelector((state) =>state)
 const dispatch = useDispatch()
  return (
    <div className="App">
      {state.value}<br/>
          <button onClick={()=>dispatch(toggleCounter())} style={{width:"150px"}}>Show/Hide Counter</button><br/>

     { state.showCounter &&  <><div>
         
        </div>
        
        <button onClick={()=>dispatch(increaseAction())}>Increase</button>
        <button onClick={()=>dispatch(decreaseAction())}>decrease</button>
    
    </>
      
      }</div>
    
  );
}

export default App;

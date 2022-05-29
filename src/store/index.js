import { createStore } from "redux"
const initState = {
    showCounter:true,
    value:0
}
const counterReducer = (state = initState,action)=>{
 switch(action.type){
  case("INCREASE"): return {...state,value:state.value+1}
  case("DECREAMENT"): return {...state,value:state.value-1}
  case("TOGGLECOUNTER"): return {...state,showCounter:!state.showCounter}
 }   
return state    
}


const store = createStore(counterReducer)
export default store
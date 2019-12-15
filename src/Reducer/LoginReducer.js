import *as ActionTypes from '../Action/type';


const initialState={
number1:'',
number2:'',
operator:'',
result:'',
msg:''

}

export default(state=initialState,action)=>{
    switch(action.type){
        case "SEND":{
  
          return{...state,[action.payload.name]:action.payload.value}
        }
        case "CHECK":{
  
          switch(state.operator){
                case "+":
                  if(parseInt(state.number1)+parseInt(state.number2)==state.result)
                    return{...state,msg:'correct'}
                  else 
                    return{...state,msg:'incorrect'}
                
                 case "-":
                    if((state.number1-state.number2)==state.result)
                    return{...state,msg:'correct'}
                  else 
                    return{...state,msg:'incorrect'}
                 
                case "*":
                  if((state.number1*state.number2)==state.result)
                    return{...state,msg:'correct'}
                  else 
                    return{...state,msg:'incorrect'}
                
                case "/":
                  if((state.number1/state.number2)==state.result)
                    return{...state,msg:'correct'}
                  else 
                    return{...state,msg:'incorrect'}
                
                    default:return{...state,msg:'not matched'}
                
                  }
                }
                  default:
                    return state;
}
}

import *as ActionTypes from '../Action/type';

const initialState={
    username:'',
    password:''
    
}

export default(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.username:{
            return{...state,username:''}
        }
        case ActionTypes.password:{
            return{...state,password:''}
        }
    // switch(){
    //     if()
    // }
        default:
            return state;
    }
}


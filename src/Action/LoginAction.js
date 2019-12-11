import *as ActionTypes from './type';

export function  username(){
    return function(dispatch){
        dispatch({type:' username'})
    }
}
export function password(){
    return function(dispatch){
        dispatch({type:'password'})
    }
}
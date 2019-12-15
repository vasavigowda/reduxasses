import *as ActionTypes from './type';

export function handleChange(event){
return function(dispatch)
{
dispatch({type:'SEND',payload:event.target});
}
}
export function check(){
return function(dispatch)
{
dispatch({type:'CHECK'});
}
}
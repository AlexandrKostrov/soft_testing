export default  ({dispatch}) => next => async action => {
    if(!action.promise){
        return next(action);
    }

    const {promise, type, payload, ...rest } = action;
     
    if(type === "LOGIN"){
         let res = await promise();
         
    return next({...rest,res,type : `${type}_SUCCESS`});
        }
        
}
export default  ({dispatch}) => next => async action => {
    if(!action.promise){
        return next(action);
    }

    const {promise, type, payload, ...rest } = action;
     
    if(type === "LOGIN"){
         let result = await promise();
    return next({...rest,result,type : `${type}_SUCCESS`});
        }
        
}
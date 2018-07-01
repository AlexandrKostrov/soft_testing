export default ({dispatch}) => next => action => {
    if(!action.promise){
        return next(action);
    }

    const {promise, type, payload, ...rest } = action;
    if(type === "LOGIN"){
    return promise().then(result =>
         next({...rest,result,type : `${type}_SUCCESS`}));}

    
}
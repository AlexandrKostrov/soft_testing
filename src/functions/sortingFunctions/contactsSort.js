export const dateSort = (a,b) =>{
    return a.addingDate - b.addingDate;
}

export const nameSort = (a,b) =>{
    return a.lastName > b.lastName;
}

//@ sort functions for server conected reducer

export const servNameSort = (a,b) =>{
    return a.name > b.name;
}

export const idSortDesc = (a,b) =>{
    return -(a.id - b.id);
}
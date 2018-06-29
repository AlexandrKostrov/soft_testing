export const dateSort = (a,b) =>{
    return a.addingDate - b.addingDate;
}

export const nameSort = (a,b) =>{
    return a.lastName > b.lastName;
}
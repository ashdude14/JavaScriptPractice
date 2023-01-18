/*
function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test
}
*/



function filter(element,cb,check) {
          var arr=[];
    for (let i = 0; i < element.length; i++) { 
             
        if(cb(element[i],check)===true)
        arr.push (element[i]);
        
    }
    return arr;
}

export{filter};

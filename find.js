/*
function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.
}

*/



function find(element,cb,check) {
          
          for (let i = 0; i < element.length; i++) { 
                   
              if(cb(element[i],check)===true)
              return element[i];
              
          }
          return undefined;
      }
 
      export{find};
     
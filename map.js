
//multiping 2 on every elements of array
function map(element, cb) {
          let arr = [];
          for (let i = 0; i < element.length; i++) { 
              arr.push(cb(element[i]));
          }
          return arr;
      }
     
      export{map};
     
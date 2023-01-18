function each(element, cb) {
    if(element.length==0)
     return {};
      for (let i = 0; i < element.length; i++) { 
          cb(element[i],i);
      }
  }
  
  export{each};
 
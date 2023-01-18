function reduce(element,cb,startingValue) {
          var var1=0;
          for (let i = startingValue; i < element.length; i++) {    
              var1=cb(var1,element[i]);
          }
          return var1;
      }

      export{reduce};
     
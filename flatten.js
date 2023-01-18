function flatten(elements) {
          let ash = [] ;
        for(var i=0;i<elements.length;i++)
        {
                  var val= elements[i];
                  if(Array.isArray(val))
                  ash=ash.concat(flatten(val))
                  else
                  ash.push(elements[i])
        }
               return ash;
}
export{flatten};
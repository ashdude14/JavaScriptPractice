import {items} from './data.js'
import  * as ash from '../find.js'
var res=ash.find(items,cb,5);  
console.log(res);
function cb(check,check2){
          if(check==check2)
          return true;
}
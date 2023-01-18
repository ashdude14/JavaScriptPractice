import {items} from './data.js'
import  * as ash from '../reduce.js'
var res=ash.reduce(items,cb,1); 
console.log(res);
function cb(var1,element1)
{
          return var1+element1;
}
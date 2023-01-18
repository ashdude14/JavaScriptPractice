import {items} from './data.js'
import  * as ash from '../map.js'
let arr = [];
arr = ash.map(items,cb); 
console.log(arr);
function cb(element) {
          return element = 2*element;
      }
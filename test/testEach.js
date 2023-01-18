import {items} from './data.js'
import * as ash from '../each.js'
console.log(ash.each(items, cb)); 
function cb(element,index) {
          console.log(`${element} : ${index}` );
      }
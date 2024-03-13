# Package will provide you JavaScript Helper methods
@praninp/javascript-helper
---
# getRandomNumber(min,max)
##### This method will provide you random number within in the given range, withouth the duplication
###### Example:
```JavaScript
import { JavaScriptHelper } from "@praninp/javascript-helper/helper.js"
console.log(JavaScriptHelper.getRandomNumber(1,5));
```
---
# generateFibonacciInRange(maxValue)
##### This method will provide you Fibonacci servies from given range
###### Example:
```JavaScript
import { JavaScriptHelper } from "@praninp/javascript-helper/helper.js"
console.log(JavaScriptHelper.generateFibonacciInRange(50));
```
---
# getTruncatedDescription(desc, maxLength)
##### This method will truncate the given string with specific range
###### Example: 
```JavaScript
import { JavaScriptHelper } from "@praninp/javascript-helper/helper.js"
let desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.`
console.log(JavaScriptHelper.getTruncatedDescription(desc, 100));
```
---
# reverseString(sentence)
##### This method will reverse the given string
###### Example:
```JavaScript
import { JavaScriptHelper } from "@praninp/javascript-helper/helper.js"
console.log(JavaScriptHelper.reverseString(`Hi This Praveen`));
```
---
# removeDuplicateElement(srcArray)
##### This method will remove the duplicate elements from the array
###### Example:
```JavaScript
import { JavaScriptHelper } from "@praninp/javascript-helper/helper.js"
console.log(JavaScriptHelper.removeDuplicateElement([1,2,3,4,5,1,2,3,4,5]));
```
---
# sortArray(srcArray, key)
##### This method will sort an array with given key
###### Example:
```JavaScript
import { JavaScriptHelper } from "@praninp/javascript-helper/helper.js"
console.log(JavaScriptHelper.sortArray(country, 'name'));
```
---
# swapArray(firstArray, secondArray)
##### This method will swap the 2 arrays without using the 3 array
###### Example:
```JavaScript
import { JavaScriptHelper } from "@praninp/javascript-helper/helper.js"
console.log(JavaScriptHelper.swapArray(arry1, arry2));
```
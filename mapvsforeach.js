//     	forEach()	map() 
// 1	The forEach() method does not returns a  new array based on the given array.	The map() method returns an entirely new array.
// 2	The forEach() method returns “undefined“.	The map() method returns the newly created array according to the provided callback function.
// 3	The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here. 	With the map() method, we can chain other methods like, reduce(),sort() etc.
// 4.	


//map  return a new arraY

let arr= [1,2,3,4,45]

let c=arr.map(  (data)=>{
    return data*2

}

)
console.log(arr)

// console.log(c)




//for each  **note if c me store kroge value toh undefined dega

// let arr =[1,2,3,4,5]
//  let c=arr.forEach(
//     (value,i)=>
//     {
//          arr[i]=value*2
//     }
// )

// console.log(c)

























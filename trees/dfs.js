// function that processes a "tree" and converts to binary
// a function that converts existing array to his binary counterpart


const convertToBinary = arr =>{
  var binaryNumbers = [255,128,64,32,16,8,4,2,1] 	
  var res = 0;		
 
  if (arr.length === 0) return 0
 	
  var size = arr.length

  binaryNumbers = binaryNumbers.slice(-3)

  for(let i = arr.length -1; i >= 0; i-- ) 
     if(arr[i] === 1){
	res+=binaryNumbers[i]	
     }	  

	return res 
}	

console.log(convertToBinary([1,1,1]))

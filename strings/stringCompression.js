// string compression

const compression = str => {
  let res = '';
  let sum = 1;	

for(let i = 0; i < str.length - 1; i++){
   if ( str.charAt(i) === str.charAt(i+1)){
	sum++;

   }else{
	res = res + str.charAt(i) + sum;
	 sum = 1;  
   }

} 	

res = res+ str.charAt(str.length - 1) + sum;
return res.length < str.length ? res : str;
}
module.exports = compression;

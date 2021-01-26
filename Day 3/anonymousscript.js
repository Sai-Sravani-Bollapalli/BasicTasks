//programs in anonymous function 

// Print odd numbers in an array 
var arr=[1,2,3,4,5];
var oddarr=arr.filter(function(odd)
{
    return odd%2!==0;
})
console.log(oddarr);  // [1, 3, 5]


//Convert all the strings to title caps in a string array 
var arr=['srav','charan','sri'];
var tcapsarr=function(word)
{
    var strarr=[];
    for(var i=0;i<word.length;i++){
        var string = word[i][0].toUpperCase();
        for(var j=1;j<word[i].length;j++){
            string=string+word[i][j].toLowerCase();  
         }
         strarr.push(string);
}
return strarr;
}
console.log(tcapsarr(arr));  // ['Srav','Charan','Sri']


//Sum of all numbers in an array 
var arr=[1,2,3,4,5];
var sumarr=arr.reduce(function(a,b)
{
    return a+b;
})
console.log(sumarr);  // 15


//Return all the prime numbers in an array
var arr=[1,2,3,4,5];
var primearr = arr.filter(function(num) {
  for (var i = 2; i <= Math.sqrt(num); i++) 
  {
    if (num % i === 0) 
    return false;
  }
  return true;
})
console.log(primearr);   // [1,2,3,5]


// Return all the palindromes in an array
var arr=['mom','charan','dad'];
var palindromearr=arr.filter(function(str)
{
    var rev=str.split("").reverse().join("");
    if (str===rev)
        return str;          
})
console.log(palindromearr);    // ["mom", "dad"]


// Return median of two sorted arrays of same size
var arr1=[1,2,3,4,5];
var arr2=[6,7,8,9,10];
var median=function(arr1,arr2) 
{
    var mergearr=[...arr1,...arr2],s,len=mergearr.length;
    s=(mergearr[len/2]+mergearr[len/2+1])/2;
    return s;
}
console.log(median(arr1,arr2));   // 6.5


// Remove duplicates from an array 
var duparr=[1,2,4,3,5,2,4,2,3];
var uniquearr= function(arr)
{
    var newArray=[...new Set(arr)];
    return newArray;
}
console.log(uniquearr(duparr));   // [1, 2, 4, 3, 5]


// Rotate an array by k times and return the rotated array
var arr=[1,2,3,4,5];
var rotatedarr=function (arr,k) 
{
    var newarr=[...arr],s;
    for(var i=0;i<k;i++){
        s=newarr.shift();
        newarr.push(s);
    }
    return newarr;
}
console.log(rotatedarr(arr,3))    // [4, 5, 1, 2, 3]

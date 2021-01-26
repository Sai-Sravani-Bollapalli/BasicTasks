//programs in IIFE 

// Print odd numbers in an array 
var oddarr=function(){
    var arr=[1,2,3,4,5];
    var oddarr1=arr.filter(function(odd)
    {
        return odd%2!==0;
    })
    return oddarr1;
    }
    oddarr();   // [1, 3, 5]


//Convert all the strings to title caps in a string array 

var tcapsarr=function(word)
{
    var arr=['srav','charan','sri'];
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
tcapsarr(arr);   // ['Srav','Charan','Sri']


//Sum of all numbers in an array 
var sumarr=function(){
    var arr=[1,2,3,4,5];
    var sumarr1=arr.reduce(function(a,b)
    {
        return a+b;
    })
    return sumarr1;
    }
    sumarr();  // 15


//Return all the prime numbers in an array
var primearr=function(){
    var arr=[1,2,3,4,5];
    var primearr1 = arr.filter(function(num) {
      for (var i = 2; i <= Math.sqrt(num); i++) 
      {
        if (num % i === 0) 
        return false;
      }
      return true;
    })
    return primearr1;
    }
    primearr();    // [1,2,3,5]


// Return all the palindromes in an array
var palindromearr= function(){
    var arr=['mom','charan','dad'];
    var palindromearr1=arr.filter(function(str)
    {
    var rev=str.split("").reverse().join("");
    if (str===rev)
        return str;          
})
return palindromearr1;
}
palindromearr();    // ["mom", "dad"]


// Return median of two sorted arrays of same size
var median=function(arr1,arr2) 
{
    var arr1=[1,2,3,4,5];
    var arr2=[6,7,8,9,10];
    var mergearr=[...arr1,...arr2],s,len=mergearr.length;
    s=(mergearr[len/2]+mergearr[len/2+1])/2;
    return s;
}
median(arr1,arr2);   // 6.5


// Remove duplicates from an array 
var uniquearr= function(arr)
{
    var duparr=[1,2,4,3,5,2,4,2,3];
    var newArray=[...new Set(arr)];
    return newArray;
}
uniquearr(duparr);   // [1, 2, 4, 3, 5]


// Rotate an array by k times and return the rotated array
var rotatedarr=function (arr,k) 
{
    var arr=[1,2,3,4,5];
    var newarr=[...arr],s;
    for(var i=0;i<k;i++){
        s=newarr.shift();
        newarr.push(s);
    }
    return newarr;
}
rotatedarr(arr,3)   // [4, 5, 1, 2, 3]
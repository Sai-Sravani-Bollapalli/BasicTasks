// Print the following details name, capital, flag using forEach function 

// create the request
var req=new XMLHttpRequest();

// open the connection
req.open('Get','https://restcountries.eu/rest/v2/all',true);

// send the connection
req.send();

// load the response
req.onload=function(){
    var data=JSON.parse(this.response);
        data.forEach((ele)=>
 {
console.log("name: "+ele.name,
            'capital: '+ele.capital,
            "flag: "+ele.flag);
 })
}
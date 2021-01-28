// Print the total population of countries using reduce function 

// create the request
var req=new XMLHttpRequest();

// open the connection
req.open('Get','https://restcountries.eu/rest/v2/all',true);

// send the connection
req.send();

// load the response
req.onload=function(){
    var data=JSON.parse(this.response);
    var totalpop= data.reduce((a,b)=>
    {
        return a+b.population 
     },0)
     console.log(totalpop);            // 7349137231
    } 
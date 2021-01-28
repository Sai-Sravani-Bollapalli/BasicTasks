// Get all the countries with population of less than 2 lacs using Filter function

// create the request
var req=new XMLHttpRequest();

// open the connection
req.open('Get','https://restcountries.eu/rest/v2/all',true);

// send the connection
req.send();

// load the response
req.onload=function(){
    var data=JSON.parse(this.response);
    var countries= data.filter((ele)=>
    {
        return ele.population<200000
     })
     console.log(countries);            //[63 countries]
    }
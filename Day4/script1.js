 // Get all the countries from Asia continent/region using filter function.

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
      return (ele.region==='Asia')
    })
 console.log(countries);      //[50 countries]
}
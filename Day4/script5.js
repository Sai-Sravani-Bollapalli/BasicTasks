// Print the country which use US Dollars as currency.

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
         return ele.currencies[0].code==="USD"
      })
  console.log(countries);     //[14 countriess]
}
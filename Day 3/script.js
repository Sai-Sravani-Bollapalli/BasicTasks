var url="";
var lat="";
var lng="";

    // create the request
    var req=new XMLHttpRequest();

    // open the connection
    req.open('Get','https://restcountries.eu/rest/v2/all',true);

    // send the connection
    req.send();

    // load the response
    req.onload=function(){
    var data=JSON.parse(this.response);
    for(var i in data){
        lat=data[i].latlng[0]; 
        lng=data[i].latlng[1]; 
        if(lat===undefined||lng===undefined)
        console.log("error")
        else 
        weather();
    }}
      function weather(){
        url="https://api.openweathermap.org/data/2.5/weather?lat=" +lat+ "&lon=" +lng+ "&appid=463ccdcd76ba4ece26fabaa12d8f9653";
 
    // create the request1
    var req1=new XMLHttpRequest();

    // open the connection
    req1.open('Get',url,true);

    // send the connection
    req1.send();

    // load the response
    req1.onload=function(){
        var data1=JSON.parse(this.response);
        console.log(data1.main.temp);
     
}  
}

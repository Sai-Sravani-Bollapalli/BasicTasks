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
        console.log(data[i].name);
    }    
}
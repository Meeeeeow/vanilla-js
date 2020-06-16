(function (global){
    
    //set up a namespace
    var ajaxUtils = {};

    //returns an http request
    function getRequestObject(){
        if(window.XMLHttpRequest){
            //making a request
            return (new XMLHttpRequest());
        }else if(window.ActiveXObject){
            //for very old browsers
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }else{
            global.alert("Ajax is not supported");
            return (null);//if browser doesnot support ajax
        }
    }

   //makes an Ajax get request to reqauestURL
   ajaxUtils.sendGetRequest = 
   function(requestUrl , responseHandler , isJsonResponse){
       var request = getRequestObject();
       request.onreadystatechange =
       function () {
           handleResponse(request , responseHandler , isJsonResponse);
       };
       request.open("GET" , requestUrl ,true);
       request.send(null);
   }; 

   function handleResponse(request , responseHandler){
       if((request.readyState == 4) && 
       (request.status == 200)){
          if(isJsonResponse == undefined){
              isJsonResponse = true;
          } 
          if(isJsonResponse){
              responseHandler(JSOn.parse(request.responseText));

          }
          else{
              responseHandler(request.responseText);
          }
           responseHandler(request);
       }
   }

   global.$ajaxUtils = ajaxUtils;
})(window);
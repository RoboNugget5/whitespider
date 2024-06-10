const whitelist = ["68.132.119.75"];


$(document).ready(()=>{
    // Use "https://ipinfo.io" link to use the
    // ipinfo for getting the ip address
    $.getJSON("https://ipinfo.io",
    function (response) {
        
        if ((whitelist.includes(response.ip)) == false) {
            document.getElementById("html").innerHTML = "<h1>Sorry, you do not have access to this page.</h1>";
            console.log("hi");
            
        }
    });
})  

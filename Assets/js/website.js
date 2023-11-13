function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
 }

 


function initMap() {
    var options= {
        zoom:20,
        center:{lat:9.657770,lng:80.159210}
        }
        var googlemap = new google.maps.Map(document.getElementById("map"), options);
        }



        $(document).ready(function() {
            hyperform(window);
        });
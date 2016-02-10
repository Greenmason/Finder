var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

getLocation()






/*
 
Live Example:

http://jsfiddle.net/KCQ4Z/14/
http://jsfiddle.net/phillpafford/KCQ4Z/70/ (using stopPropagation() )
JS:
 */

// FlipSwitch event function
$(window).load(function(){
$('#my-slider').change(function() {
    var myswitch = $(this);
    var show     = myswitch[0].selectedIndex == 1 ? true:false;
    var firstItem = document.getElementById('datebox1');
    
    if(show) {
        
        $('#show-me').fadeIn('slow');
        $('#first-me').fadeOut();
       //////// $('#datebox1').attr("disabled", "disabled");
      //  $('#datebox1').prop("disabled", "disabled");
        firstItem.removeAttribute ("disabled", "disabled")
        
    } else {
        
        $('#first-me').fadeIn('slow');
        $('#show-me').fadeOut();
       // $('#datebox1').removeProp('disabled');
        //////////$('#datebox1').removeAttr('disabled', 'disabled');
        firstItem.setAttribute ("disabled", "disabled")
    }
});

/*
$('#1availableLater').change(function() {
    var myswitch = $(this);
    var show     = myswitch[0].selectedIndex == 1 ? true:false;
    
    if(show) {
        
        $('#datebox1').removeClass('disabled');
    } else {
        
        $('#datebox1').addClass('disabled');
    }
});
*/
});
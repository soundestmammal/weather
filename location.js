var Geo = {};
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success , error);
}
else {
	alert("Geolocation is not supported");
}
function error() {
	alert("That's weird! We couldn't find you!");
}
function success(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;

//API Key 9a62d2eb73fec908

var key = 9a62d2eb73fec908
var Weather = "http://api.wunderground.com/api/”+ key +”/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";

$.ajax({
url : Weather,
dataType : "jsonp",
success : function(data) {
// get all the information
}
});

var location =data['location']['city'];
var temp = data['current_observation']['temp_f'];
var img = data['current_observation']['icon_url'];
var desc = data['current_observation']['weather'];
var wind = data['current_observation']['wind_string'];

//setting the spans to the correct parameters
$('#location').html(location);
$('#temp').html(temp);
$('#desc').html(desc);
$('#wind').html(wind);
//filling the image src attribute with the image url
$('#img').attr('src', img);

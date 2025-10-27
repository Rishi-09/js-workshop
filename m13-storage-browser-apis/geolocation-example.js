// geolocation-example.js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log("Latitude:", pos.coords.latitude);
    console.log("Longitude:", pos.coords.longitude);
  }, (err) => {
    console.error("Geolocation error:", err);
  });
} else {
  console.log("Geolocation not supported");
}



//
const myAPIKey = '777ea2ebd636019f4ed684c275b8df6c';

window.addEventListener('load', () => {
    let long;
    let lat;

    // Accessing user Geo Location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // Storing Longitude and Latitude in variables
            long = position.coords.longitude;
            lat = position.coords.latitude;
        });
    }
});

console.log(position);
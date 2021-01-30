var mymap = L.map('mapid').setView([34.0522, -118.2437], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2ZyYW5jbzE1IiwiYSI6ImNra2o3Z3BpNDBhOXcyb29hZGFjZHFucWYifQ.SOwlGWL2jOc7ME64jaO-QA'
}).addTo(mymap);
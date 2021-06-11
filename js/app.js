mapboxgl.accessToken =
  "pk.eyJ1IjoicHVzaHBhbmsiLCJhIjoiY2twczQ1ZW8xMGNvaDJ3dDh4dWpodGppaCJ9.2FCol3ZWUuaRY4m5Fy6y8w";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-71.060982, 42.35725],
  zoom: 18,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

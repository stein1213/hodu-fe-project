const mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(33.442303, 126.571544),
        level: 4
};
const map = new kakao.maps.Map(mapContainer, mapOption);
function setMapType(maptype) {
        const roadmapControl = document.getElementById('btnRoadmap');
        const skyviewControl = document.getElementById('btnSkyview');
        if (maptype === 'roadmap') {
                map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
                roadmapControl.className = 'selected_btn';
                skyviewControl.className = 'btn';
        } else {
                map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
                skyviewControl.className = 'selected_btn';
                roadmapControl.className = 'btn';
        }
}
function zoomIn() {
        map.setLevel(map.getLevel() - 1);
}
function zoomOut() {
        map.setLevel(map.getLevel() + 1);
}
const markerPosition  = new kakao.maps.LatLng(33.442303, 126.571544);

const marker = new kakao.maps.Marker({
        position: markerPosition
});
marker.setMap(map);
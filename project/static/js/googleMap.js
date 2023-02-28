// google mapの機能を表示するための処理

function initMap() {
    var opts = {
      zoom: 5,
      // 東京駅の座標
      center: new google.maps.LatLng(35.681236,139.767125),
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById("map"), opts);
  }
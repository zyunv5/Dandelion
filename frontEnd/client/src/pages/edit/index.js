import React, { Component } from "react";
import { EditContainer } from "./style";

class Edit extends Component {
  componentDidMount() {
    const { BMap, BMAP_STATUS_SUCCESS } = window;
    // var map = new BMap.Map("container");
    // var point = new BMap.Point(116.404, 39.915);
    // map.centerAndZoom(point, 15);

    var map = new BMap.Map("container");
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);

    var geoc = new BMap.Geocoder();
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r) {
      if (this.getStatus() === BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        alert("您的位置：" + r.point.lng + "," + r.point.lat);
        setLocation(r.point);
      } else {
        alert("failed" + this.getStatus());
      }
    },{enableHighAccuracy: true});

      //获取地理位置的函数
      function setLocation(point){
        geoc.getLocation(point, function(rs){
            var addComp = rs.addressComponents;
            var result = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
            //$("#start").val(result);
            //$("#start_location").val(result);
            alert("当前的位置为:"+result);
        });
    }

    // function myFun(result){
    //   var cityName = result.name;
    //   map.setCenter(cityName);
    //   alert("当前定位城市:"+cityName);
    // }
    // var myCity = new BMap.LocalCity();
    // myCity.get(myFun);
  }
  render() {
    return (
      <div>
        <EditContainer id="container"></EditContainer>
      </div>
    );
  }
}

export default Edit;

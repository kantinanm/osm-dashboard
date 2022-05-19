import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
//import * as L from 'Leaflet';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: any;
  basemap:any;
  basemap2:any;

  layer:any;
  layer2:any;

  googleStreets:any;
  googleHybrid:any;
  googleSat:any;
  googleTerrain:any;

  icon1: any;
  markersGroup: any;

  province_list: any;
 
  layerGroup: any;
  lay_province: any;

  constructor(public service : BackendApiService) { 
    
  }

  ngOnInit(): void {
    this.Showmap();
  }

  Showmap(){
    this.map = L.map('map',{attributionControl:false,center:[16.741808, 100.197029],zoom:6,maxZoom:21,zoomControl:false})
    
    
   /* L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
            minZoom: 9,
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(this.map);*/

  this.googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
      maxZoom: 22,
      subdomains:['mt0','mt1','mt2','mt3']
  });

  this.googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
      maxZoom: 22,
      subdomains:['mt0','mt1','mt2','mt3']
  });

  this.googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
      maxZoom: 22,
      subdomains:['mt0','mt1','mt2','mt3']
  });

  this.googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
      maxZoom: 22,
      subdomains:['mt0','mt1','mt2','mt3']
  }).addTo(this.map);
   
    //L.marker([16.741808, 100.197029]).addTo(this.map);
    this.layerGroup = L.layerGroup().addTo(this.map);
    //this.markersGroup = L.markerClusterGroup().addTo(this.map);
    this.markersGroup = L.markerClusterGroup();

    this.icon1 = new L.Icon({
      iconUrl: './node_modules/leaflet/dist/images/marker-icon.png',
      shadowUrl: './node_modules/leaflet/dist/images/marker-shadow.png',
      iconSize: [25, 35],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });



//39004d
  function getColor(d:any) {
      return d > 1000 ? '#39004d' :
          d > 500 ? '#730099' :
              d > 200 ? '#9900cc' :
                  d > 100 ? '#cc33ff' :
                      d > 50 ? '#d966ff' :
                          d > 10 ? '#e699ff' :
                              d > 0 ? '#f2ccff' : //#ff0040
                                  '#FFFFFF00';
  }

  
  function onEachFeature(feature:any, layer:any) {

    var popupContent = "<p>จังหวัด <b>" +
        feature.properties.pv_tn + "</b></br> มีการสำรวจทั้งหมด " +
        feature.properties.val + " จุด</br>";

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }
    layer.bindPopup(popupContent);
  };

  function style(feature:any) {
      return {
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7,
          fillColor: getColor(feature.properties.val)
      };
  }


    this.service.osm_count().then((res: any) => {
      console.log(res);
       L.geoJSON(res,{
         style:style,
         onEachFeature:onEachFeature,
        }).addTo(this.layerGroup);
      // }).addTo(this.map);
    });

    

    var legend = L.control.attribution({position: 'bottomright'});

    legend.onAdd = function (map:any) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 10, 50, 100, 200, 500, 1000],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(this.map);

    this.layer=L.marker([16.741808, 100.197029])
    .bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup().addTo(this.map);

    this.layer2=L.polygon([
      [
        16.742043991325044,
        100.19265174865721
        
      ],
      [
        16.739085040388055, 
        100.19106388092041            
      ],
      [
        16.737071283606536,
        100.19213676452637
      ],
      [
        16.736763053649458,
        100.1958703994751
        
      ],
      [
        16.738242552895752,
        100.19786596298218
        
      ],
      [
        16.74099603479156,
        100.19775867462158
        
      ],
      [
        16.74210563564746,
        100.19526958465575
        
      ],
      [
        16.74206453943473,
        100.19507646560669
        
      ],
      [
        16.74235221273761,
        100.1952052116394
        
      ],
      [
        16.742043991325044,
        100.19265174865721
        
      ]
  ]);

  /*
    var baseMaps = {
        "Hybrid": this.googleHybrid,
        "Streets": this.googleStreets,
        "Sat": this.googleSat,
        "Terrain": this.googleTerrain,
    };



    var overlayMaps = {
        "point": this.layer,
        "polygon": this.layer2
    };

    L.control.layers(baseMaps, overlayMaps).addTo(this.map);*/

    var baseMaps = {
      "Hybrid": this.googleHybrid,
      "Streets": this.googleStreets,
      "Sat": this.googleSat,
      "Terrain": this.googleTerrain,
  };
  
  var overlayMaps = {
      "ตำแหน่งจุดสำรวจ": this.markersGroup,
      "ผลรวมจุดสำรวจรายพื้นที่": this.layerGroup
  };

  L.control.layers(baseMaps, overlayMaps).addTo(this.map);

  }

  list_prov(item:any){
    console.log(item);
    this.layerGroup.clearLayers();
    this.markersGroup.clearLayers();
    
    this.service.count_prov_q({prov_name: item}).then((res: any) => {
      console.log(res);
      function getColor(d:any) {
        return d > 1000 ? '#39004d' :
            d > 500 ? '#730099' :
                d > 200 ? '#9900cc' :
                    d > 100 ? '#cc33ff' :
                        d > 50 ? '#d966ff' :
                            d > 10 ? '#e699ff' :
                                d > 0 ? '#f2ccff' :
                                    '#FFFFFF00';
    }

    function style(feature:any) {
        return {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.val)
        };
    }

    function onEachFeature(feature:any, layer:any) {

        var popupContent = "<p>จังหวัด <b>" +
            feature.properties.pv_tn + "</b></br> มีการสำรวจทั้งหมด " +
            feature.properties.val + " จุด</br>";

        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
        }
        layer.bindPopup(popupContent);
    };



/*
    if(item != ''){

        this.lay_province = L.geoJSON(res, {
            style: style,
            onEachFeature: onEachFeature
          }).addTo(this.layerGroup)
        this.map.fitBounds(this.lay_province.getBounds())

    }else{
        this.service.osm_count().then((res: any) => {
            this.lay_province = L.geoJSON(res, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(this.layerGroup)
            this.map.fitBounds(this.lay_province.getBounds())
        })
    }
*/






  
    })


  }

}

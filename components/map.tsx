"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef(null)
  useEffect(() => {
    if (mapRef.current) {
      return;
    }
    const map = L.map("map").setView([51.505, -0.09], 13);
    mapRef.current = map
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return (
    <div
      id="map"
      style={{ height: "400px", width: "100%" }} // thêm style để map hiển thị
    ></div>
  );
};

export default Map;

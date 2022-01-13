import React, { useState, useEffect } from "react";
import axios from "axios";
import MapChart from "../components/MapChart";
import "../styles/App.css";

import PeriodicalData from "./PeriodicalData";

const DataFetching = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.covid19api.com/summary");
      const res = [result.data];
      setData(res);
    };

    fetchData();
  }, []);

  return (
    <div data-testid="map">
      {data ? (
        <div className="App">
          <MapChart stats={data} />
          <PeriodicalData stats={data} />
        </div>
      ) : (
        // "yo"
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataFetching;
